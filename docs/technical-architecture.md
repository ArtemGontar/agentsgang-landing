# ProtoHive Technical Architecture Specification

## Executive Summary

ProtoHive is a SaaS platform enabling users to create and manage AI-powered companies with specialized agents. This document outlines the technical architecture for a scalable, secure, and maintainable MVP that can grow with the business while maintaining cost efficiency.

## Technology Stack Recommendations

### Frontend Stack
**Primary Technology: Next.js 14+ with TypeScript**

**Core Framework & Libraries:**
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript 5.0+
- **Styling**: Tailwind CSS 3.4+ with Headless UI
- **State Management**: Zustand + React Query (TanStack Query)
- **UI Components**: Radix UI primitives + custom components
- **Animation**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Charts/Visualization**: Recharts
- **Real-time**: Socket.io client

**Rationale:**
- **Next.js 14+**: Excellent SEO, server-side rendering, API routes, and static generation for landing pages
- **TypeScript**: Type safety reduces bugs, improves developer experience, and enables better refactoring
- **Tailwind CSS**: Rapid prototyping, consistent design system, small bundle size
- **Zustand**: Lightweight state management, better than Redux for MVP complexity
- **React Query**: Excellent caching, synchronization, and data fetching patterns
- **Radix UI**: Accessible components out of the box, customizable styling

### Backend Stack
**Primary Technology: Node.js with Fastify**

**Core Framework & Libraries:**
- **Runtime**: Node.js 20+ LTS
- **Framework**: Fastify 4+ (high performance, TypeScript-first)
- **Language**: TypeScript 5.0+
- **ORM**: Prisma 5+ (type-safe database access)
- **Validation**: Zod (shared with frontend)
- **Authentication**: NextAuth.js + custom JWT handling
- **File Upload**: Multer + AWS S3
- **Email**: Resend (modern email API)
- **Queue System**: BullMQ with Redis
- **WebSockets**: Socket.io

**Alternative Backend Option: Python with FastAPI**
- **Framework**: FastAPI 0.100+ (if team prefers Python)
- **ORM**: SQLAlchemy 2.0+ with Alembic
- **Validation**: Pydantic v2
- **Background Tasks**: Celery with Redis

**Rationale for Node.js/Fastify:**
- **Performance**: Fastify is 2-3x faster than Express
- **TypeScript-first**: Native TypeScript support, excellent developer experience
- **Ecosystem**: Vast npm ecosystem, easy to find developers
- **Code Sharing**: Share types and validation schemas with frontend
- **Real-time**: Excellent WebSocket support for chat features

### Database Architecture
**Primary Database: PostgreSQL 15+**

**Data Storage Strategy:**
- **Relational Data**: PostgreSQL (users, organizations, agents, conversations)
- **Caching**: Redis 7+ (sessions, rate limiting, queues)
- **File Storage**: AWS S3 (documents, images, agent artifacts)
- **Search**: PostgreSQL Full-Text Search initially, Elasticsearch for scale
- **Analytics**: ClickHouse or BigQuery (future consideration)

**Database Design Approach:**
- **Multi-tenant**: Shared database with tenant isolation
- **Connection Pooling**: PgBouncer or Supabase connection pooling
- **Backup Strategy**: Automated daily backups with point-in-time recovery
- **Migrations**: Prisma migrations with CI/CD integration

**Rationale:**
- **PostgreSQL**: ACID compliance, JSON support, excellent performance, rich feature set
- **Redis**: Fast in-memory storage for caching and real-time features
- **S3**: Cost-effective, scalable file storage with CDN integration

### AI Integration Strategy
**Primary AI Provider: OpenAI with Multi-Provider Support**

**AI Infrastructure:**
- **Primary LLM**: OpenAI GPT-4/GPT-4-turbo
- **Backup Provider**: Anthropic Claude 3 (vendor diversification)
- **Function Calling**: OpenAI Function Calling for tool integration
- **Embeddings**: OpenAI text-embedding-3-small for semantic search
- **Image Generation**: DALL-E 3 (optional feature)

**Agent Tool Integration:**
- **Code Execution**: Sandboxed Docker containers (CodeSandbox API)
- **Web Search**: Serper API or Tavily Search API
- **Document Processing**: PDF.js, Mammoth.js for document parsing
- **API Integrations**: Zapier or custom webhook system

**Memory & Context Management:**
- **Vector Database**: Pinecone or Supabase pgvector
- **Conversation Storage**: PostgreSQL with efficient indexing
- **Context Windows**: Sliding window strategy for long conversations

**Rationale:**
- **OpenAI**: Most reliable, feature-rich, excellent function calling
- **Multi-provider**: Reduces vendor lock-in, enables fallback strategies
- **Vector Storage**: Essential for long-term memory and semantic search
- **Sandboxed Execution**: Security for code execution features

### Cloud Infrastructure & Hosting
**Primary Platform: Vercel + Railway/Supabase**

**Hosting Strategy:**
- **Frontend**: Vercel (Next.js optimized, global CDN, automatic deployments)
- **Backend**: Railway (simple deployment, good developer experience)
- **Database**: Supabase (managed PostgreSQL with real-time features)
- **File Storage**: AWS S3 with CloudFront CDN
- **Redis**: Railway Redis or Upstash (serverless Redis)

**Alternative Hosting Strategy (More Control):**
- **Container Platform**: AWS ECS with Fargate or DigitalOcean App Platform
- **Database**: Amazon RDS PostgreSQL or DigitalOcean Managed Database
- **Load Balancer**: AWS ALB or DigitalOcean Load Balancer

**Rationale:**
- **Vercel**: Excellent Next.js performance, automatic scaling, great developer experience
- **Railway**: Simple deployment, good pricing for MVPs, excellent developer experience
- **Supabase**: Managed PostgreSQL with built-in auth, real-time subscriptions
- **Cost-Effective**: This stack minimizes operational overhead for MVP

## System Architecture Overview

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Users/Clients │    │   Admin Panel   │    │  Landing Page   │
│  (Web Browser)  │    │  (Next.js SPA)  │    │  (Next.js SSG)  │
└─────────┬───────┘    └─────────┬───────┘    └─────────┬───────┘
          │                      │                      │
          └──────────────────────┼──────────────────────┘
                                 │
                 ┌───────────────┼───────────────┐
                 │         Vercel CDN            │
                 │    (Next.js App Router)       │
                 └───────────────┼───────────────┘
                                 │
                 ┌───────────────┼───────────────┐
                 │     API Gateway/Proxy         │
                 │   (Next.js API Routes)        │
                 └───────────────┼───────────────┘
                                 │
          ┌──────────────────────┼──────────────────────┐
          │                      │                      │
          ▼                      ▼                      ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Auth Service  │    │  Main Backend   │    │  AI Processing  │
│  (NextAuth.js)  │    │  (Fastify API)  │    │   (Background)  │
└─────────┬───────┘    └─────────┬───────┘    └─────────┬───────┘
          │                      │                      │
          └──────────────────────┼──────────────────────┘
                                 │
                 ┌───────────────┼───────────────┐
                 │        Data Layer             │
                 └───────────────┼───────────────┘
                                 │
    ┌────────────┬───────────────┼───────────────┬────────────┐
    │            │               │               │            │
    ▼            ▼               ▼               ▼            ▼
┌─────────┐ ┌─────────┐ ┌─────────────┐ ┌─────────┐ ┌─────────────┐
│PostgreSQL│ │  Redis  │ │    S3       │ │Pinecone │ │   OpenAI    │
│(Primary) │ │(Cache)  │ │(Files)      │ │(Vector) │ │   (LLM)     │
└─────────┘ └─────────┘ └─────────────┘ └─────────┘ └─────────────┘

External Integrations:
┌─────────────────┬─────────────────┬─────────────────┐
│   Email         │   Payments      │   Analytics     │
│  (Resend)       │  (Stripe)       │ (PostHog)       │
└─────────────────┴─────────────────┴─────────────────┘
```

## Data Flow & Key Interactions

### 1. User Authentication Flow
```
User → Frontend → NextAuth.js → Database → JWT Token → Frontend State
```

### 2. Chat/Agent Interaction Flow
```
User Message → Frontend → WebSocket → Backend → AI Service → Agent Tools → Response → WebSocket → Frontend
```

### 3. Organization Management Flow
```
User Action → Frontend → API Route → Backend Service → Database → Real-time Update → All Connected Clients
```

### 4. File Upload Flow
```
File Selection → Frontend → Signed URL Request → S3 Direct Upload → Webhook → Backend → Database Update
```

### 5. Background Task Processing
```
User Action → Queue Job → BullMQ → Background Worker → AI Processing → Database Update → WebSocket Notification
```

## API Design Approach

### Primary API Strategy: RESTful with GraphQL Consideration

**REST API Structure:**
```
POST /api/auth/login
GET  /api/organizations
POST /api/organizations
GET  /api/organizations/:id/agents
POST /api/organizations/:id/agents
POST /api/conversations
GET  /api/conversations/:id/messages
POST /api/conversations/:id/messages
WebSocket /api/socket
```

**API Design Principles:**
- **RESTful Resources**: Clear resource-based URLs
- **Consistent Response Format**: Standardized success/error responses
- **Pagination**: Cursor-based pagination for large datasets
- **Versioning**: URL versioning (/api/v1/) for future compatibility
- **Rate Limiting**: Per-user and per-endpoint rate limits

**OpenAPI Documentation:**
- **Swagger/OpenAPI 3.0**: Auto-generated documentation
- **Type Generation**: Generate TypeScript types from OpenAPI spec
- **Interactive Docs**: Swagger UI for API exploration

**Future GraphQL Consideration:**
- **When to Add**: When frontend complexity increases significantly
- **Apollo Server**: If GraphQL is needed for complex data fetching
- **Benefits**: Reduced over-fetching, better developer experience for complex queries

## Security Architecture

### Authentication & Authorization
**Strategy: JWT with Refresh Tokens**

**Implementation:**
- **NextAuth.js**: OAuth providers (Google, GitHub) + email/password
- **JWT Access Tokens**: 15-minute expiry
- **Refresh Tokens**: 7-day expiry, stored in httpOnly cookies
- **Role-Based Access Control (RBAC)**: Organization owner, admin, member roles
- **Multi-Tenant Security**: Row-Level Security (RLS) in PostgreSQL

### Data Protection
**Encryption & Privacy:**
- **Data at Rest**: PostgreSQL encryption, S3 server-side encryption
- **Data in Transit**: TLS 1.3 for all connections
- **Sensitive Data**: Encrypt PII using AES-256 before storage
- **API Keys**: Store in environment variables, rotate regularly

**GDPR Compliance:**
- **Data Deletion**: Soft delete with hard delete after retention period
- **Data Export**: User data export functionality
- **Privacy Controls**: User consent management
- **Audit Logs**: Track all data access and modifications

### API Security
**Protection Strategies:**
- **Rate Limiting**: Redis-based rate limiting per IP/user
- **Input Validation**: Zod schemas for all inputs
- **SQL Injection**: Prisma ORM prevents SQL injection
- **XSS Protection**: Content Security Policy (CSP) headers
- **CORS**: Strict CORS configuration
- **API Key Management**: Separate keys for different services

## Deployment Strategy

### Environment Setup
**Multi-Environment Strategy:**
- **Development**: Local development with Docker Compose
- **Staging**: Mirror of production for testing
- **Production**: Optimized for performance and reliability

### CI/CD Pipeline
**GitHub Actions Workflow:**

```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main, staging]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - Checkout code
      - Setup Node.js
      - Install dependencies
      - Run tests (Jest + Playwright)
      - Run linting (ESLint + Prettier)
      - Type checking (TypeScript)

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - Build application
      - Run security scanning
      - Build Docker images
      - Push to container registry

  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - Deploy to staging (if staging branch)
      - Deploy to production (if main branch)
      - Run smoke tests
      - Notify team
```

### Database Migrations
**Migration Strategy:**
- **Prisma Migrations**: Version-controlled schema changes
- **Backward Compatibility**: Ensure migrations don't break existing features
- **Rollback Strategy**: Quick rollback procedures for failed deployments
- **Data Seeding**: Automated seeding for development environments

## Observability & Monitoring

### Logging Strategy
**Structured Logging with Winston:**

```typescript
// Logging levels and structure
interface LogEntry {
  level: 'error' | 'warn' | 'info' | 'debug';
  message: string;
  timestamp: string;
  userId?: string;
  organizationId?: string;
  traceId: string;
  metadata?: Record<string, any>;
}
```

**Log Aggregation:**
- **Development**: Console logging with pretty formatting
- **Production**: Structured JSON logs to Vercel/Railway logs
- **Future**: Centralized logging with Datadog or LogRocket

### Application Monitoring
**Performance & Error Tracking:**
- **Error Tracking**: Sentry for error monitoring and alerting
- **Performance**: Vercel Analytics + Web Vitals monitoring
- **Uptime**: Pingdom or UptimeRobot for service monitoring
- **Real User Monitoring**: PostHog for user behavior analytics

### Infrastructure Monitoring
**System Health:**
- **Database**: PostgreSQL slow query logs, connection pool monitoring
- **Redis**: Memory usage, connection monitoring
- **API**: Response times, error rates, throughput
- **Queue**: Job success/failure rates, queue depth

### Alerting Strategy
**Alert Definitions:**
- **Critical**: Service downtime, database connection failures
- **Warning**: High error rates, slow response times, queue backlog
- **Info**: Deployment notifications, usage milestones

## Risk Assessment & Mitigation

### Technical Risks

#### 1. AI Service Reliability
**Risk**: OpenAI API downtime or rate limiting affecting user experience
**Mitigation:**
- Implement multiple AI provider fallbacks (Claude, local models)
- Circuit breaker pattern for AI service calls
- Queue system for non-urgent AI tasks
- Clear user communication during outages

#### 2. Database Performance
**Risk**: PostgreSQL performance degradation with scale
**Mitigation:**
- Implement read replicas for scalability
- Database query optimization and indexing strategy
- Connection pooling with PgBouncer
- Monitoring and alerting for slow queries

#### 3. Security Vulnerabilities
**Risk**: Data breaches, unauthorized access
**Mitigation:**
- Regular security audits and penetration testing
- Automated security scanning in CI/CD
- Bug bounty program
- Security incident response plan

#### 4. Vendor Lock-in
**Risk**: Over-dependence on specific cloud providers
**Mitigation:**
- Use infrastructure as code (Terraform)
- Abstract vendor-specific APIs behind interfaces
- Document migration procedures
- Regular architecture reviews

### Business Risks

#### 1. Rapid Scale Requirements
**Risk**: Sudden user growth overwhelming infrastructure
**Mitigation:**
- Auto-scaling configuration for compute resources
- Database connection limits and pooling
- CDN for static asset delivery
- Load testing with realistic user scenarios

#### 2. Cost Escalation
**Risk**: AI API costs growing faster than revenue
**Mitigation:**
- Implement usage monitoring and alerting
- Token usage optimization strategies
- Tiered pricing that reflects AI costs
- Cost budgets and automatic shutdown thresholds

#### 3. Compliance Requirements
**Risk**: GDPR, CCPA, or other regulatory compliance issues
**Mitigation:**
- Privacy-by-design architecture
- Data retention and deletion policies
- Regular compliance audits
- Legal consultation for policy development

## MVP Development Phases

### Phase 1: Core Infrastructure (Weeks 1-3)
- Authentication system setup
- Basic organization and user management
- Database schema and API foundation
- Deployment pipeline establishment

### Phase 2: Agent System (Weeks 4-6)
- AI agent creation and management
- Basic chat interface
- Simple tool integration (web search, code execution)
- Memory system implementation

### Phase 3: Collaboration Features (Weeks 7-9)
- Multi-agent conversations
- Task assignment system
- File sharing and document management
- Real-time updates

### Phase 4: Polish & Scale (Weeks 10-12)
- Performance optimization
- Advanced security features
- Analytics and monitoring
- Landing page and onboarding

## Cost Estimation (Monthly)

### MVP Stage (0-1000 users):
- **Hosting**: $200/month (Vercel Pro + Railway + Supabase)
- **AI Services**: $500/month (OpenAI API usage)
- **Third-party Services**: $100/month (Sentry, analytics, email)
- **Total**: ~$800/month

### Growth Stage (1000-10000 users):
- **Hosting**: $800/month (upgraded tiers)
- **AI Services**: $2000/month (increased usage)
- **Third-party Services**: $300/month (expanded tooling)
- **Total**: ~$3100/month

### Scaling Considerations:
- **Database**: Move to dedicated instances at scale
- **AI Costs**: Implement caching and optimization strategies
- **Infrastructure**: Consider AWS/GCP for more control and cost optimization

## Development Team Recommendations

### Ideal Team Composition (MVP):
- **1 Full-Stack Developer**: Next.js + Node.js experience
- **1 Frontend Developer**: React/TypeScript specialist
- **1 AI Integration Developer**: LLM and API integration experience
- **1 DevOps/Infrastructure**: Cloud deployment and monitoring

### Technical Skills Required:
- **Frontend**: React, TypeScript, Tailwind CSS, Next.js
- **Backend**: Node.js, TypeScript, PostgreSQL, Redis
- **AI/ML**: OpenAI API, vector databases, prompt engineering
- **Cloud**: Vercel, Railway/AWS, database management
- **DevOps**: CI/CD, monitoring, security best practices

---

## Conclusion

This architecture provides a solid foundation for ProtoHive's MVP while maintaining flexibility for future growth. The technology choices prioritize developer productivity, cost efficiency, and scalability, with clear upgrade paths as the platform grows.

The modular architecture allows for iterative development and easy testing of new features. Security and observability are built in from the start, reducing technical debt and compliance risks.

Regular architecture reviews and performance monitoring will ensure the system continues to meet business needs as ProtoHive scales from MVP to a fully-featured SaaS platform.
