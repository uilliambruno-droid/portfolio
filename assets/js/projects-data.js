(function () {
  window.PortfolioProjects = [
    {
      id: 'laborit-project',
      title: 'Laborit Project',
      subtitle: 'FastAPI Copilot API • Python',
      description: 'A resilient FastAPI service that combines caching, AI-oriented workflows and operational endpoints.',
      fullDescription: 'A backend API designed for copilot-style workflows where latency and failures need to be handled deliberately. I structured the service around a MySQL data layer, two-level caching and resilience controls so requests can return useful operational metadata while external dependencies are slow or unavailable.',
      architecture: [
        'FastAPI service with SQLAlchemy and a MySQL-backed data layer',
        'Two-level cache with Redis support to reduce repeated work',
        'Timeout, retry and circuit-breaker controls around dependent operations',
        'Structured request metadata and operational endpoints for observability'
      ],
      functionality: [
        'Problem solved: make copilot API workflows more dependable under latency and dependency failures',
        'Contribution: designed the backend flow, cache strategy and resilience mechanisms',
        'Technical decision: isolate costly or unreliable calls behind caching and failure controls',
        'Verification: repository documents operational endpoints and observable request metadata'
      ],
      tags: ['FastAPI', 'Redis', 'MySQL', 'SQLAlchemy'],
      highlights: ['Two-level caching', 'Resilience controls', 'Operational endpoints'],
      image: './assets/img/projects/laborit-project.svg',
      link: 'https://github.com/uilliambruno-droid/Laborit-project'
    },
    {
      id: 'fastapi-blog',
      title: 'FastAPI Blog API',
      subtitle: 'Asynchronous REST API • Python',
      description: 'A blog API with JWT authentication, ownership rules, database migrations and integration tests.',
      fullDescription: 'An asynchronous REST API that treats authorization as part of the domain: authenticated users can manage their own posts, while the application keeps database changes reproducible through migrations. The project is a focused example of building testable API endpoints rather than only CRUD screens.',
      architecture: [
        'FastAPI with SQLAlchemy persistence and Pydantic request validation',
        'JWT authentication with owner-based authorization for posts',
        'Alembic migrations to version database schema changes',
        'Middleware for request logging and security headers'
      ],
      functionality: [
        'Problem solved: provide a maintainable blog API with clear access boundaries',
        'Contribution: implemented API structure, authentication and ownership rules',
        'Technical decision: enforce post ownership in the backend instead of trusting the client',
        'Testing: integration tests cover the API workflow; migrations make schema changes repeatable'
      ],
      tags: ['FastAPI', 'JWT', 'SQLAlchemy', 'Pytest'],
      highlights: ['Owner authorization', 'Alembic migrations', 'Integration tests'],
      image: './assets/img/projects/fastapi-blog.svg',
      link: 'https://github.com/uilliambruno-droid/fastapi-blog'
    },
    {
      id: 'flask-blog-api',
      title: 'Flask Blog API',
      subtitle: 'REST API • Python',
      description: 'A role-based blog API with JWT login, CRUD workflows and automated unit and integration validation.',
      fullDescription: 'A REST API that demonstrates how a small Flask service can still have explicit responsibilities and access control. It handles users, roles and posts through a JWT-secured API, separating administrator and standard-user permissions and validating the main flows with automated tests.',
      architecture: [
        'Flask with Flask-SQLAlchemy and SQLite persistence',
        'Flask-JWT-Extended for token-based login and protected routes',
        'Marshmallow-based serialization and validation',
        'Role-based permissions for administrative and standard-user actions'
      ],
      functionality: [
        'Problem solved: control access to content-management actions through backend permissions',
        'Contribution: built user, role and post CRUD flows with authorization rules',
        'Technical decision: model roles explicitly rather than only checking whether a user is logged in',
        'Testing: unit and integration tests validate the API and authorization behavior'
      ],
      tags: ['Flask', 'JWT', 'RBAC', 'Pytest'],
      highlights: ['Role-based access', 'Protected CRUD', 'Automated tests'],
      image: './assets/img/projects/flask-blog-api.svg',
      link: 'https://github.com/uilliambruno-droid/flask-blog-api'
    },
    {
      id: 'fraud-detector',
      title: 'Fraud Detector',
      subtitle: 'Machine Learning Pipeline • Python',
      description: 'A credit-card fraud detection project focused on data quality, model comparison and business-cost thresholds.',
      fullDescription: 'A production-oriented machine-learning project that frames fraud detection as a business decision, not only a model score. The workflow cleans transaction data, preserves class balance through stratified splits, compares baseline models and records experiments so threshold choices can be reviewed and reproduced.',
      architecture: [
        'Python pipeline using Scikit-learn and XGBoost baselines',
        'Data-cleaning stage followed by stratified train/test splitting',
        'MLflow experiment tracking and artifact logging',
        'Poetry-managed environment for reproducible dependencies'
      ],
      functionality: [
        'Problem solved: identify suspicious card transactions while accounting for business costs',
        'Contribution: prepared the data workflow, baselines and experiment tracking',
        'Technical decision: optimize the classification threshold for business cost instead of accuracy alone',
        'Validation: compare Logistic Regression and XGBoost runs with tracked artifacts and stratified evaluation data'
      ],
      tags: ['Python', 'XGBoost', 'MLflow', 'Scikit-learn'],
      highlights: ['Cost-aware threshold', 'Experiment tracking', 'Stratified evaluation'],
      image: './assets/img/projects/fraud_detector.svg',
      link: 'https://github.com/uilliambruno-droid/fraud_detector'
    },
    {
      id: 'finance-mvp-ai',
      title: 'Pluto Finance AI',
      subtitle: 'Finance Workflow MVP • Python',
      description: 'A conversational finance assistant for transaction capture, budgeting goals and planning workflows.',
      fullDescription: 'A finance MVP that turns conversational input into structured budgeting and planning data. It requires a user profile before chat, supports income and expense capture, estimates goal progress, and uses an optional LLM fallback so the assistant can continue responding when the primary path is unavailable.',
      architecture: [
        'Python application with Streamlit interface and Pandas data processing',
        'Supabase used for persistent application data',
        'OpenRouter integration for an optional LLM response path',
        'Requests-based integration layer for external services'
      ],
      functionality: [
        'Problem solved: turn unstructured money conversations into trackable financial actions',
        'Contribution: implemented the profile-to-chat workflow, transaction capture and goal calculations',
        'Technical decision: require profile intake before chat to ground recommendations in user context',
        'Verification: MVP flows include goal progress, target estimates and a documented fallback response path'
      ],
      tags: ['Python', 'Supabase', 'Pandas', 'AI'],
      highlights: ['Conversation-to-data flow', 'Goal tracking', 'LLM fallback'],
      image: './assets/img/projects/finance-mvp-ai.svg',
      link: 'https://github.com/uilliambruno-droid/finance-mvp-ai',
      demoLink: 'https://finance-mvp-ai.onrender.com/'
    }
  ];
})();
