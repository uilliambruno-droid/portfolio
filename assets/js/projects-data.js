(function () {
  window.PortfolioProjects = [
    {
      id: 'laborit-project',
      title: 'Laborit Project',
      subtitle: 'Python • 2026',
      description: "A resilient FastAPI service with caching, dependency failure controls and operational visibility.",
      fullDescription: "Laborit addresses latency and reliability in a copilot API. The service combines a MySQL data layer, two-level caching and resilience controls so requests can return useful operational metadata even when dependencies are slow or unavailable.",
      architecture: [
        "FastAPI with SQLAlchemy and a MySQL-backed data layer",
        "Two-level response and data caching with Redis and in-memory fallback",
        "Retry, timeout and circuit-breaker controls around dependent operations",
        "Health and metrics endpoints with per-request execution metadata"
      ],
      functionality: [
        "Contribution: designed the API workflow, cache strategy and resilience mechanisms",
        "Decision: keep a local memory fallback when the shared Redis cache is unavailable",
        "Validation: repository README reports 31 passing tests and 99% app-package coverage for its documented run",
        "Source and operational runbook are available in the repository"
      ],
      tags: ['Python', 'Backend'],
      highlights: ['Service-oriented code organization', 'Business rule implementation', 'API-ready architecture'],
      image: './assets/img/projects/laborit-project.svg',
      link: 'https://github.com/uilliambruno-droid/Laborit-project'
    },,
    {
      id: 'fraud_detector',
      title: 'Fraud Detector',
      subtitle: 'Python • 2026',
      description: "A credit-card fraud workflow comparing baseline models and choosing thresholds against error costs.",
      fullDescription: "Fraud Detector treats imbalanced transaction classification as a business decision. It compares Logistic Regression and XGBoost, selects a threshold against false-positive and false-negative costs on validation data, and evaluates the chosen threshold on held-out data.",
      architecture: [
        "Python workflow using Scikit-learn and XGBoost",
        "Stratified train, validation and test splits for imbalanced classes",
        "MLflow tracking for experiment parameters, metrics and artifacts",
        "Poetry-managed dependencies and saved training artifacts"
      ],
      functionality: [
        "Contribution: implemented data preparation, model comparison, threshold selection and experiment logging",
        "Decision: optimize expected error cost instead of accuracy alone or a default 0.5 threshold",
        "Validation: repository tests cover data, metrics and modeling components",
        "Results and experiment artifacts are documented in the repository"
      ],
      tags: ['Python', 'Data', 'Fraud'],
      highlights: ['Pattern-based fraud rules', 'Dataset processing workflows', 'Readable backend logic'],
      image: './assets/img/projects/fraud_detector.svg',
      link: 'https://github.com/uilliambruno-droid/fraud_detector'
    },,
    {
      id: 'proppilot-take-home',
      title: 'PropPilot Take Home',
      subtitle: 'TypeScript • 2026',
      description: "A real-estate lead inbox with public intake, authenticated agents and database-enforced tenant isolation.",
      fullDescription: "PropPilot lets prospective clients submit leads through an agency-specific public form, while each agency team manages its own private inbox. Tenant boundaries are enforced in Postgres rather than relying only on the client interface.",
      architecture: [
        "React and TypeScript with Supabase Auth, Postgres and Realtime",
        "Row-level security ties agents to their agency profile",
        "Public contact creation is handled through a database RPC",
        "Versioned schema includes grants, policies and indexes"
      ],
      functionality: [
        "Contribution: built the public intake, authenticated inbox, status updates and realtime refresh",
        "Decision: enforce agency isolation with database RLS and limit public writes to an RPC",
        "Verification: repository checklist covers cross-agency visibility, realtime inserts and status updates",
        "The repository documents that it has no end-to-end test suite"
      ],
      tags: ['TypeScript', 'Frontend', 'Vercel'],
      highlights: ['TypeScript project structure', 'Modern UI implementation', 'Production-ready deployment flow'],
      image: './assets/img/projects/proppilot-take-home.svg',
      link: 'https://github.com/uilliambruno-droid/proppilot-take-home',
      demoLink: 'https://proppilot-take-home-fawn.vercel.app/'
    },,
    {
      id: 'fastapi-blog',
      title: 'FastAPI Blog',
      subtitle: 'Python API • 2026',
      description: "An asynchronous blog API with JWT authentication, ownership rules, migrations and automated tests.",
      fullDescription: "FastAPI Blog API demonstrates backend access control in a focused content-management domain. Authenticated users manage their own posts, administrators can override ownership rules, and database changes are managed through repeatable migrations.",
      architecture: [
        "FastAPI with SQLAlchemy Core and Pydantic request contracts",
        "JWT authentication with owner-based authorization and admin override",
        "Service-layer domain errors translated into HTTP responses by controllers",
        "Alembic migrations, request-ID logging and security headers"
      ],
      functionality: [
        "Contribution: implemented authentication, post workflows and layered API responsibilities",
        "Decision: enforce ownership in backend services rather than trusting client-side checks",
        "Validation: repository README reports 37+ unit and integration tests and 99% coverage for its documented run",
        "Automated tests cover auth, authorization, middleware, services and API flows"
      ],
      tags: ['FastAPI', 'REST API'],
      highlights: ['Structured blog endpoints', 'Backend architecture practice', 'Scalable API organization'],
      image: './assets/img/projects/fastapi-blog.svg',
      link: 'https://github.com/uilliambruno-droid/fastapi-blog'
    },,
    {
      id: 'finance-mvp-ai',
      title: 'Finance MVP AI',
      subtitle: 'Python • 2026',
      description: 'Financial MVP experimentation with AI-oriented workflows and backend logic.',
      fullDescription: 'An experimental financial platform exploring AI-driven workflows. The system automates financial calculations and provides intelligent insights through machine learning models.',
      architecture: [
        'FastAPI backend for high performance',
        'AI/ML model integration for predictions',
        'Event-driven architecture',
        'Async processing for financial calculations'
      ],
      functionality: [
        'Automated financial calculations',
        'AI-powered transaction analysis',
        'Portfolio recommendations',
        'Real-time market data processing'
      ],
      tags: ['Python', 'Finance', 'AI'],
      highlights: ['Finance workflow automation', 'Python backend experimentation', 'MVP architecture approach'],
      image: './assets/img/projects/finance-mvp-ai.svg',
      link: 'https://github.com/uilliambruno-droid/finance-mvp-ai',
      demoLink: 'https://finance-mvp-ai.onrender.com/'
    },,
    {
      id: 'e-cards',
      title: 'E-Cards',
      subtitle: 'PowerShell • 2026',
      description: 'Automation scripts for card generation and workflow optimization.',
      fullDescription: 'A comprehensive PowerShell automation suite for managing digital card generation and batch processing. Streamlines repetitive workflows with intelligent scheduling.',
      architecture: [
        'PowerShell scripting framework',
        'Batch processing pipeline',
        'Scheduled task automation',
        'Error handling and logging'
      ],
      functionality: [
        'Automated card generation',
        'Batch file processing',
        'Scheduled workflows',
        'Generate and export results'
      ],
      tags: ['PowerShell', 'Automation'],
      highlights: ['Script-based automation', 'Fast workflow execution', 'CLI-centric tooling'],
      image: './assets/img/projects/e-cards.svg',
      link: 'https://github.com/uilliambruno-droid/e-cards'
    },,
    {
      id: 'mamba-mentality-notebooklm',
      title: 'Mamba Mentality NotebookLM',
      subtitle: 'Knowledge Project • 2026',
      description: 'NotebookLM-oriented project focused on content structuring and knowledge workflows.',
      fullDescription: 'An innovative knowledge management system built around NotebookLM. Structures research and learning content with AI-powered organization and synthesis.',
      architecture: [
        'NotebookLM API integration',
        'Content classification system',
        'Knowledge graph implementation',
        'AI-powered summarization'
      ],
      functionality: [
        'Content ingestion and parsing',
        'Automatic knowledge extraction',
        'Research organization',
        'AI-generated summaries and insights'
      ],
      tags: ['Knowledge', 'Workflow'],
      highlights: ['Content organization', 'Knowledge-first workflow', 'Research-oriented structure'],
      image: './assets/img/projects/mamba-mentality-notebooklm.svg',
      link: 'https://github.com/uilliambruno-droid/mamba-mentality-notebooklm'
    },,
    {
      id: 'bank-challenge-dio',
      title: 'Bank Challenge DIO',
      subtitle: 'Python • 2026',
      description: 'Banking challenge implementation with clear backend foundations.',
      fullDescription: 'A comprehensive banking system implementation covering core financial operations. Demonstrates domain modeling and backend architecture best practices.',
      architecture: [
        'Domain-driven design (DDD)',
        'Core banking operations (accounts, transactions)',
        'State management patterns',
        'Data persistence abstraction'
      ],
      functionality: [
        'Account creation and management',
        'Deposit and withdrawal operations',
        'Transaction history tracking',
        'Balance calculations'
      ],
      tags: ['Python', 'Banking'],
      highlights: ['Core banking operations', 'Domain modeling practice', 'Backend fundamentals'],
      image: './assets/img/projects/bank-challenge-dio.svg',
      link: 'https://github.com/uilliambruno-droid/bank-challenge-dio'
    },,
    {
      id: 'portfolio',
      title: 'Portfolio Website',
      subtitle: 'HTML/CSS/JS • 2026',
      description: 'Personal portfolio with custom UI, modal system and polished frontend experience.',
      fullDescription: 'A fully custom portfolio website built from scratch without frameworks. Features a sophisticated dark design system with modular CSS architecture and reusable JavaScript components.',
      architecture: [
        'BEM CSS methodology for organization',
        'Modular CSS files by section',
        'Vanilla JavaScript (no frameworks)',
        'Bootstrap 5.3.3 for grid and modals',
        'Static data module pattern for projects'
      ],
      functionality: [
        'Project showcase with modal details',
        'Certificate display system',
        'Responsive mobile-first design',
        'Contact form integration',
        'Smooth scroll navigation'
      ],
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      highlights: ['Custom dark design system', 'Reusable modals for projects/certs', 'Responsive layout structure'],
      image: './assets/img/projects/portfolio.svg',
      link: 'https://github.com/uilliambruno-droid/portfolio'
    },,
    {
      id: 'fastapi-bankchallenge',
      title: 'FastAPI Bank Challenge',
      subtitle: 'Python API • 2026',
      description: 'Banking API with transaction flows, auth and backend best practices.',
      fullDescription: 'A production-grade banking API built with FastAPI. Implements secure authentication, transaction processing, and comprehensive banking operations with best practices.',
      architecture: [
        'FastAPI async framework',
        'JWT authentication and authorization',
        'SQLAlchemy ORM for data models',
        'PostgreSQL/SQLite database support',
        'Dependency injection for services'
      ],
      functionality: [
        'User account management',
        'Secure login with JWT tokens',
        'Transaction creation and processing',
        'Account balance queries',
        'Transaction history retrieval'
      ],
      tags: ['FastAPI', 'JWT', 'SQLAlchemy'],
      highlights: ['Account and transaction endpoints', 'JWT authentication', 'PostgreSQL/SQLite support'],
      image: './assets/img/projects/fastapi-bankchallenge.svg',
      link: 'https://github.com/uilliambruno-droid/fastapi-bankchallenge'
    },,
    {
      id: 'flask-blog-api',
      title: 'Flask Blog API',
      subtitle: 'Python API • 2026',
      description: 'REST API using Flask with authentication, roles and testing practices.',
      fullDescription: 'A feature-rich blog API built with Flask, showcasing authentication mechanisms, role-based access control, and comprehensive testing strategies.',
      architecture: [
        'Flask micro-framework',
        'JWT token-based authentication',
        'Role-based access control (RBAC)',
        'Flask-SQLAlchemy for ORM',
        'Pytest testing framework'
      ],
      functionality: [
        'User authentication and registration',
        'Admin and user role management',
        'Post CRUD operations',
        'Automatic timestamps and soft deletes',
        'Comprehensive unit and integration tests'
      ],
      tags: ['Flask', 'JWT', 'Pytest'],
      highlights: ['Users, roles and posts CRUD', 'Database migration patterns', 'Automated tests setup'],
      image: './assets/img/projects/flask-blog-api.svg',
      link: 'https://github.com/uilliambruno-droid/flask-blog-api'
    },,
    {
      id: 'django-site',
      title: 'Django Site',
      subtitle: 'Python Web • 2026',
      description: 'Django application with ORM structure and scalable backend foundations.',
      fullDescription: 'A comprehensive Django web application demonstrating the full capabilities of the Django framework. Focuses on ORM mastery and scalable application architecture.',
      architecture: [
        'Django MTV (Model-Template-View) pattern',
        'Django ORM for data modeling',
        'Django admin interface customization',
        'URL routing and middleware',
        'Template inheritance system'
      ],
      functionality: [
        'User management system',
        'Data model relationships (ForeignKey, M2M)',
        'Admin panel for content management',
        'Template-based views',
        'Static file management'
      ],
      tags: ['Django', 'ORM', 'SQLite'],
      highlights: ['Django app structure', 'ORM-based data modeling', 'Admin and backend architecture'],
      image: './assets/img/projects/django-site.svg',
      link: 'https://github.com/uilliambruno-droid/django-site'
    }
  ];
})();
