# 👥 HR Portal - Enterprise Dashboard

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Material UI](https://img.shields.io/badge/Material%20UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)

A responsive, high-performance **Single Page Application (SPA)** designed for Human Resources management. This project serves as a technical demonstration of building scalable frontend applications using **Angular 17+** and **Angular Material**.

🔗 **Live Demo:** [View HR Portal](https://muthiazs.github.io/HRPORTAL-ANGULAR/)

---

## 📖 Project Overview

This application simulates a corporate **HR Information System (HRIS)**. It solves common administrative problems by providing a unified interface for:
* Visualizing workforce statistics.
* Managing employee databases (CRUD simulation).
* Tracking recruitment pipelines.

The goal of this project was to implement **Clean Architecture** principles in a frontend environment, ensuring the codebase is modular, maintainable, and type-safe.

---

## 🚀 Key Technical Features

### 1. Modular Component Architecture
Instead of a monolithic structure, the application is decoupled into functional feature modules. This ensures **Separation of Concerns**:
* `DashboardComponent`: Handles data visualization and key metrics widgets.
* `EmployeesComponent`: Manages data grids and transactional operations.
* `RecruitmentComponent`: Tracks candidate status using list views.

### 2. Angular Routing (SPA)
Utilized `@angular/router` to create a seamless user experience without page reloads.
* Implemented lazy-loading compatible route definitions.
* Configured active state styling (`routerLinkActive`) for intuitive navigation.

### 3. Strict Typing with TypeScript
To mimic enterprise-grade reliability, I implemented strict **Interfaces** (`Employee`, `StatCard`, `Candidate`).
* Prevents runtime errors by catching type mismatches during development.
* Ensures consistent data structures across services and components.

### 4. Responsive Design System
Built using **Angular Material** to adhere to Google's Material Design guidelines:
* **Layout:** Responsive `MatSidenav` that adapts to screen sizes.
* **Components:** Utilized `MatTable`, `MatCard`, and `MatFormField` for a polished UI.
* **UX:** Interactive states (ripples, hover effects) and feedback loops.

---

## 🛠️ Tech Stack

* **Framework:** Angular 17 (Standalone Components)
* **Language:** TypeScript 5.x
* **UI Library:** Angular Material & CDK
* **Build Tool:** Angular CLI
* **Deployment:** GitHub Pages

---



---

## 💻 How to Run Locally

If you want to explore the code structure:

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/thiaanyaaa/HRPORTAL-ANGULAR.git](https://github.com/thiaanyaaa/HRPORTAL-ANGULAR.git)
    ```

2.  **Install Dependencies**
    ```bash
    cd HRPORTAL-ANGULAR
    npm install
    ```

3.  **Run Development Server**
    ```bash
    ng serve
    ```
    Navigate to `http://localhost:4200/`.

---

## 👤 Author

**Muthia Z.**
* *Aspiring Tech Professional with a background in Computer Science.*
* Connect with me on [LinkedIn](LINK_LINKEDIN_KAMU_DISINI)

---
