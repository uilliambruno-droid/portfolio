(function () {
  window.PortfolioProjects = [
  {
    "id": "laborit-project",
    "title": "Laborit Project",
    "subtitle": "Resilient Copilot API • Python",
    "description": "A FastAPI copilot service designed to stay observable and recover gracefully when dependencies slow down or fail.",
    "fullDescription": "The project addresses latency, resilience and operational visibility in a commercial copilot API. I organized the request flow around explicit query plans, separate service responsibilities, two-level caching and failure controls so each response can explain how it was produced.",
    "architecture": [
      "FastAPI with SQLAlchemy and a MySQL data layer",
      "Separate response and data caches, with Redis and an in-memory fallback",
      "Retry, timeout and circuit-breaker controls around dependent steps",
      "Health and metrics endpoints plus per-request execution metadata"
    ],
    "functionality": [
      "Contribution: structured the API workflow, cache strategy and resilience layer",
      "Decision: use Redis for shared cache state while retaining local fallback if Redis is unavailable",
      "Validation: repository README documents 31 passing tests and 99% app-package coverage for the recorded run",
      "Code and operations runbook are available in the repository"
    ],
    "tags": [
      "FastAPI",
      "Redis",
      "MySQL",
      "SQLAlchemy"
    ],
    "highlights": [
      "Two-level caching",
      "Failure handling",
      "Operational metrics"
    ],
    "image": "./assets/img/projects/laborit-project.svg",
    "link": "https://github.com/uilliambruno-droid/Laborit-project"
  },
  {
    "id": "proppilot-take-home",
    "title": "PropPilot Take-Home",
    "subtitle": "Multi-tenant Lead Inbox • TypeScript",
    "description": "A real-estate lead inbox with public intake, agent authentication and tenant isolation enforced by database policies.",
    "fullDescription": "The app lets prospective clients submit a lead through an agency-specific public form, then gives each agency team a private inbox. I implemented the data and access flow so tenant boundaries are enforced in Postgres, not only in the client interface.",
    "architecture": [
      "React and TypeScript with Supabase Auth, Postgres and Realtime",
      "Versioned SQL schema with indexes, grants, policies and a public contact-creation RPC",
      "Row-level security ties authenticated agents to the agency in their profile",
      "Public visitors submit through the RPC instead of receiving direct table-write access"
    ],
    "functionality": [
      "Contribution: built the public contact flow, authenticated inbox, status updates and realtime refresh",
      "Decision: enforce agency isolation in database RLS and keep public writes behind one RPC path",
      "Manual verification: repository checklist covers cross-agency visibility, realtime inserts and saved status",
      "The repository explicitly notes that it has no end-to-end test suite"
    ],
    "tags": [
      "TypeScript",
      "Supabase",
      "Postgres",
      "RLS"
    ],
    "highlights": [
      "Tenant isolation",
      "Public intake",
      "Realtime inbox"
    ],
    "image": "./assets/img/projects/proppilot-take-home.svg",
    "link": "https://github.com/uilliambruno-droid/proppilot-take-home",
    "demoLink": "https://proppilot-take-home-fawn.vercel.app"
  },
  {
    "id": "fastapi-blog",
    "title": "FastAPI Blog API",
    "subtitle": "Asynchronous REST API • Python",
    "description": "An asynchronous API with JWT login, owner-based permissions, repeatable migrations and unit/integration tests.",
    "fullDescription": "This API demonstrates backend access control and maintainable service boundaries in a focused content-management domain. Readers can view published posts; authenticated users manage their own posts, while administrators can override ownership rules.",
    "architecture": [
      "FastAPI, SQLAlchemy Core and Pydantic request contracts",
      "JWT authentication with owner-based authorization and admin override",
      "Service-layer domain exceptions translated into HTTP responses by controllers",
      "Alembic migrations, request-ID logging, security headers and environment validation"
    ],
    "functionality": [
      "Contribution: implemented authentication, post workflows, authorization and the layered API structure",
      "Decision: enforce ownership in backend services rather than relying on client-side checks",
      "Validation: repository README reports 37+ unit/integration tests and 99% coverage for the documented run",
      "Automated tests cover authentication, authorization, middleware, services and API flows"
    ],
    "tags": [
      "FastAPI",
      "JWT",
      "Alembic",
      "Pytest"
    ],
    "highlights": [
      "Owner authorization",
      "Database migrations",
      "Automated tests"
    ],
    "image": "./assets/img/projects/fastapi-blog.svg",
    "link": "https://github.com/uilliambruno-droid/fastapi-blog"
  },
  {
    "id": "hermes-etl",
    "title": "Hermes ETL",
    "subtitle": "Job Data Pipeline • Python",
    "description": "A Luigi pipeline that collects job listings, validates and deduplicates them, then sends only new matches to Telegram.",
    "fullDescription": "The pipeline turns several public job feeds into a repeatable daily workflow. Each stage writes inspectable JSON or CSV artifacts, and historical state prevents previously seen vacancies from being sent again.",
    "architecture": [
      "Luigi tasks for collection, normalization, validation, filtering and deduplication",
      "Configurable providers, keyword/location/seniority filters and stable deduplication keys",
      "CSV and JSON artifacts plus local history for previously seen jobs",
      "Telegram delivery with retry/backoff and a dry-run mode"
    ],
    "functionality": [
      "Contribution: built the pipeline stages, filtering and state handling, Telegram notifications and Windows scheduler entrypoint",
      "Decision: use explicit Luigi dependencies and local JSON state to keep the MVP easy to run without extra infrastructure",
      "Validation: the README documents a mock provider and Telegram dry-run path before real delivery",
      "The daily summary artifact records the outcome of each run"
    ],
    "tags": [
      "Python",
      "Luigi",
      "ETL",
      "Telegram"
    ],
    "highlights": [
      "Scheduled pipeline",
      "Deduplication",
      "Inspectable outputs"
    ],
    "image": "./assets/img/project-placeholder.svg",
    "link": "https://github.com/uilliambruno-droid/hermes-etl"
  },
  {
    "id": "fraud-detector",
    "title": "Fraud Detector",
    "subtitle": "Cost-aware ML Workflow • Python",
    "description": "A credit-card fraud workflow comparing baseline models and choosing thresholds against false-positive and false-negative costs.",
    "fullDescription": "The repository frames fraud detection as a decision problem for imbalanced transaction data. It cleans the dataset, trains Logistic Regression and XGBoost baselines, selects a threshold using validation-set business cost, and evaluates the fixed choice on held-out test data.",
    "architecture": [
      "Python workflow using Scikit-learn and XGBoost",
      "Stratified train, validation and test splits for imbalanced classes",
      "MLflow tracking for parameters, metrics and model artifacts",
      "Poetry-managed dependencies and saved training artifacts"
    ],
    "functionality": [
      "Contribution: implemented data preparation, baseline training, threshold optimization and experiment logging",
      "Decision: optimize expected false-positive/false-negative cost rather than use accuracy or a default 0.5 threshold",
      "Validation: repository includes pytest coverage for data, metrics and modeling modules",
      "Results include PR-AUC, ROC-AUC, precision, recall, F1 and configurable expected cost"
    ],
    "tags": [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "MLflow"
    ],
    "highlights": [
      "Imbalanced data",
      "Cost-based threshold",
      "Experiment tracking"
    ],
    "image": "./assets/img/projects/fraud_detector.svg",
    "link": "https://github.com/uilliambruno-droid/fraud_detector"
  }
];
})();
