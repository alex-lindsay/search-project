# search-project

Develop product search microservices

## Introduction

We have the ambitious goal of rebuilding Amazon.com’s shopping experience as a set of microservices. To keep the scope narrow, please focus on the core features that relate to the “core user activity” of “purchasing an item”. The mandatory services to include in the design are the authentication service and the item search service.

### Required Deliverables

- [ ] A **prioritized high-level technical roadmap** for building these microservices. _(1)_
- [ ] **Release planning** based on the roadmap. _(2)_
- [ ] Set of **KPIs** to track the success of the product as we progress on our roadmap and how
      we can measure them. _(3)_
- [ ] A **high-level diagram** of all the proposed microservices and their communications with
      each other. _Ideally, use UML_. _(4)_
- [ ] **High-level technical specification documents** for all services. (Architecture, tooling,
      framework, ...) _(5)_
- [ ] **API definition** for the microservices using _OpenAPI/Swagger_ _(6)_
- [ ] The **database schema/s** for the proposed microservices. _(7)_
- [ ] Implement a simple version of the **authentication service** using PHP 7+ and a framework
      of your choice and **deploy it** to AWS, Google Cloud or Azure. _(8)_
- [ ] **Share the URL** for us to test. _(9)_
- [*] Please **use Git** as version control. Create a **new project** in your own GitHub
  account and push the code to it. _(10)_
- [ ] Pay special attention to the **“README.md”** document, we would like you to keep
      it _as informative as possible_. _(11)_
- [ ] Please also **push all the documentation and diagrams** to GitHub. _(12)_

### Bonus Items

- [ ] Build a **“Login”** UI using a JS framework of your choice to use the Auth API. _(13)_
- [ ] Demonstrate **CI/CD** chops _(14)_
- [ ] Use **Docker and/or Kubernetes** _(15)_
- [ ] Use **Terraform or CloudFormation** _(16)_

## Project Plan

### Release 1 - Planning (ETA ?Saturday EOD)

- [ ] Develop Tech Stack based on functional requirements
  - [ ] Tools
    - [ ] Service Development
      - [*] Programming Language
      - [ ] Service Framework
      - [ ] Test Platform
        - [ ] Test Data
    - [ ] Database Choice
    - [ ] Messaging
  - [ ] Hosting Platform
    - [*] Platform
    - [ ] Compute
    - [ ] Storage (DB)
    - [ ] Messaging
    - [ ] Service Coupling
    - [ ] Authentication
    - [ ] Document High-Level Architecture
  - [ ] Define and Document KPIs
  - [ ] Define Services and APIs (Preliminary)
  - [ ] Define Data Model (Preliminary)
  - [ ] DELIVER _(1)_ TECHNICAL ROADMAP
  - [ ] DELIVER _(2)_ RELEASE PLAN
  - [ ] DELIVER _(3)_ KPIS
  - [ ] DELIVER _(4)_ ARCHITECTURE DIAGRAM
  - [ ] DELIVER _(5)_ TECHNICAL SPECIFICATIONS
  <!-- - [ ] DELIVER *(6)* TECHNICAL SPECIFICATIONS -->
  - [*] DELIVER _(10)_ GITHUB REPO
  - [*] DELIVER _(11)_ README.md
  - [ ] DELIVER _(12)_ DELIVER DOCS TO GITHUB

* [ ] Identify potential refactorings/optimizations (ongoing)

### Release 2 - Infrastucture (ETA ?Saturday EOD)

- [ ] Set up service hosting environment
  - [ ] Set up API Server
    - [ ] Install PHP
    - [ ] Install Lumen
  - [ ] Set up DB Server
  - [ ] Set up Auth Service
  - [ ] Set up Messaging Service
- [ ] Install PHP Cognito Support (?)
- [ ] Install PHP DB Support (?)
- [ ] Install PHP Messaging Support (?)

* [ ] Identify potential refactorings/optimizations (ongoing)

### Unscheduled Tasks

- [ ] Generate Sample User Data
- [ ] Generate Sample Product Data
- [ ] Upload Sample User Data
- [ ] Upload Sample Product Data
- [ ] Create boilerplate Login Service
- [ ] Deploy boilerplace Login Service
- [ ] Create boilerplate Search Service
- [ ] Deploy boilerplace Search Service
- [ ] Create boilerplate Cart Service
- [ ] Deploy boilerplace Cart Service
- [ ] Create boilerplate Checkout Service
- [ ] Deploy boilerplace Checkout Service
- [ ] Create boilerplate Payment Service
- [ ] Deploy boilerplace Payment Service
- [ ] Create boilerplate Fulfillment Service
- [ ] Deploy boilerplace Fulfillment Service
- [ ] Create boilerplate Metrics Service
- [ ] Deploy boilerplace Metrics Service
- [ ] Add Business Logic

## Tech Stack

- Amazon AWS
- LAMP running on Amazon Linux 2
  - Most familiar hosting environment for me to start with.
- Lumen application framework
  - Lightweight
- Amazon Cognito - Authentication
  - Don't recreate the wheel

## KPIs

- Cost
- Response Time
- Conversion
- Code Coverage
- Traffic

## Compromises

- Very little attention has been given to construction of hosting environment other than to get something FUNCTIONALLY operational - this is an area where I'd want to work with Operations/Platform to get the optimal architecture, and scaling plan in place.
- Cheating a metrics service. This could be any of a number of better solutions for tracking time based data.
