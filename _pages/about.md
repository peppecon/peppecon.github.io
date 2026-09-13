---
permalink: /
layout: default
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<style>
  .abstract-content img {
    max-width: 85%;
    height: auto;
    display: block;
    margin: 20px auto;
  }
  .abstract-content table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    color: inherit;
  }
  .abstract-content th, .abstract-content td {
    border: 1px solid var(--border-color);
    padding: 10px;
    text-align: left;
  }
  .abstract-content th {
    background-color: var(--tertiary-bg);
    color: var(--text-primary);
  }
  .link-secondary {
    font-size: 0.9rem;
    font-weight: normal;
    margin-left: 10px;
    vertical-align: middle;
  }
</style>

<span id="about" class="section-anchor"></span>

Welcome!

I am a sixth-year Ph.D. student in Economics at **Bocconi University** in Milan, where my advisors are <a href="https://sites.google.com/site/grassibasile/" target="_blank" rel="noopener noreferrer">Basile Grassi</a> and <a href="https://sites.google.com/site/tlebarbanchon/home" target="_blank" rel="noopener noreferrer">Thomas Le Barbanchon</a>.

### **I will be on the 2026/2027 academic job market.**

My research focuses on how workers sort across jobs and the consequences for human capital and wages. I am particularly interested in how uncertainty shapes the behaviour of firms and workers and how those responses affect the aggregate economy.

**Research interests**: Macroeconomics, Labor Economics, and Structural Econometrics.

In Spring 2026, I visited the Stanford Economics Department as a Visiting Student Researcher, hosted by Luigi Bocola. During Spring 2025, I was a Visiting Student Research Collaborator at Princeton University, hosted by Gianluca Violante.

<strong><a href="/files/curriculum.pdf" target="_blank" rel="noopener noreferrer">Curriculum Vitae</a></strong>

---

## Research {#research}

### Job Market Paper

<div class="abstract-container">

  <div class="abstract-header">
    <span class="arrow">▶</span>
    <span>
      "The Micro and Macro Implications of Multidimensional Skill Uncertainty"
    </span>
  </div>

  <div class="abstract-content">

    <div class="abstract-expanded">
      <div class="abstract-text">
        What are the consequences of multidimensional skill uncertainty for workers’ wages and aggregate output? I develop and estimate a general equilibrium dynamic Roy model in which workers have imperfect information about their multidimensional skills and accumulate task-specific human capital. Estimated on Portuguese administrative data, the model rationalizes key patterns of occupational mobility, with learning about comparative advantage playing a central role in occupational reallocation among young and poorly matched workers. Removing information frictions raises aggregate output by 5.2%, primarily through better skill allocation across occupations, while generating the largest wage gains early in workers’ careers and among the most mismatched. A feasible information treatment about comparative advantage across tasks recovers about 18% of this output loss. Finally, job transformation induced by Large Language Model adoption raises output while widening the output gap between the imperfect- and full-information economies along the transition path and in the new long run.
      </div>
    </div>

    <div class="draft-button">
      <a href="/files/jmp.pdf" target="_blank" rel="noopener noreferrer">Draft</a>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5315959" target="_blank" rel="noopener noreferrer">SSRN</a>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <a href="/files/DeDominicisPiero_NBERSI2026.pdf" target="_blank" rel="noopener noreferrer">NBER Summer Institute Slides</a>
    </div>

  </div>

</div>

<div class="abstract-presentation-info">
  <strong>🏆 Best Young Scholar Paper Award (First Prize) — CEF 2026</strong><br>
  <strong>Presented at the <a href="https://www.nber.org/conferences/si-2026-micro-and-macro-perspectives-aggregate-labor-market" target="_blank" rel="noopener noreferrer">NBER Summer Institute - The Micro and Macro Perspectives of the Aggregate Labor Market</a></strong>
</div>

### Work in Progress

- "The Experimentation Value of Occupations"

- "Structural Change and the Flattening of the Within-Firm Occupational Job Ladder"

---

## Teaching {#teaching}

*Bocconi University, Milan (Italy)*

* Monetary Theory and Policy (30159, Bachelor) · Fall 2022 – Present
* Economia - Modulo 2 (Macroeconomia) (30066, Bachelor) · Fall 2022 – Present
* Financial Macroeconomics (30172, Bachelor) · Fall 2022 – Fall 2024
* Econometrics (30462, Bachelor) · Fall 2022 – Fall 2024

---

## Resources {#resources}

### Computational Economics <a href="https://github.com/peppecon/Computational-Economics" target="_blank" class="link-secondary">(Link to GitHub Repository)</a>

<div class="abstract-container">
  <div class="abstract-header">
    <span class="arrow">▶</span>
    <span>Projection Methods with Neoclassical Growth Model Application</span>
    <a href="https://github.com/peppecon/Computational-Economics/tree/main/Projection%20Methods%20with%20NGM%20Application" target="_blank" class="link-secondary" onclick="event.stopPropagation();">(Link to GitHub Repository)</a>
  </div>
  <div class="abstract-content" markdown="1">

This repository contains implementations of numerical methods for solving dynamic economic models, focusing on **Projection Methods** (Chebyshev Polynomials) and their application to the **Neoclassical Growth Model (NGM)**.

## Project Overview

The project is structured to demonstrate:
1.  **Direct Implementation of Projection Methods**: Using Chebyshev polynomials to approximate value and policy functions.
2.  **Application**: Solving the **Stochastic NGM with Endogenous Labor Supply** using global solution methods.

## 1. Function Approximation & Teaching Material

The following figures illustrate the core concepts of function approximation, demonstrating the convergence properties and structural advantages of Chebyshev projection methods.

### Example 1: Convergence with Number of Points
![Convergence with Points](https://raw.githubusercontent.com/peppecon/Computational-Economics/main/Projection%20Methods%20with%20NGM%20Application/presentation/figures/teaching/02_approximation_quality.png)

### Chebyshev Approximation: Smooth vs Non-Smooth Functions
![Smooth vs Non-Smooth](https://raw.githubusercontent.com/peppecon/Computational-Economics/main/Projection%20Methods%20with%20NGM%20Application/presentation/figures/teaching/03_smooth_vs_nonsmooth.png)

### Chebyshev vs Taylor Polynomial: Exponential Function
![Chebyshev vs Taylor Exp](https://raw.githubusercontent.com/peppecon/Computational-Economics/main/Projection%20Methods%20with%20NGM%20Application/presentation/figures/teaching/09a_chebyshev_vs_polynomial_exp.png)

### Chebyshev Approximation: Curvy Function
![Chebyshev Curvy](https://raw.githubusercontent.com/peppecon/Computational-Economics/main/Projection%20Methods%20with%20NGM%20Application/presentation/figures/teaching/09b_chebyshev_vs_polynomial_curvy.png)

### Taylor Polynomial Approximation: Curvy Function
![Taylor Curvy](https://raw.githubusercontent.com/peppecon/Computational-Economics/main/Projection%20Methods%20with%20NGM%20Application/presentation/figures/teaching/13_taylor_expansions_only.png)

---

## 2. Neoclassical Growth Model (NGM)

### Calibration Parameters
The model is calibrated using standard quarterly parameters:

| Parameter | Value | Description |
| :--- | :--- | :--- |
| $\beta$ | 0.99 | Discount Factor |
| $\alpha$ | 0.33 | Capital Share |
| $\delta$ | 0.025 | Depreciation Rate |
| $\nu$ | 1.0 | Frisch Elasticity |
| $\rho$ | 0.95 | Persistence of Productivity Shock |
| $\sigma$ | 0.02 | Std. Dev. of Innovation |
| $L_{ss}$ | 0.33 | Target Labor Supply (Steady State) |

### Deterministic Solution Comparison
![Deterministic Comparison](https://raw.githubusercontent.com/peppecon/Computational-Economics/main/Projection%20Methods%20with%20NGM%20Application/solve_NGM_model/NGM_figures/deterministic_Chebyshev_direct_comparison.png)

### Stochastic NGM with Endogenous Labor Supply

#### Policy Functions & Results
The stochastic solution provides the policy functions for $c(k,z)$ and $l(k,z)$.

![2D Policy Functions](https://raw.githubusercontent.com/peppecon/Computational-Economics/main/Projection%20Methods%20with%20NGM%20Application/solve_NGM_model/presentation/stochastic_Chebyshev_labor_presentation_2d.png)

![Policy Functions Z1](https://raw.githubusercontent.com/peppecon/Computational-Economics/main/Projection%20Methods%20with%20NGM%20Application/solve_NGM_model/NGM_figures/stochastic/stochastic_labor_policy_functions_z1.png)

#### Euler Equation Errors: Convergence and Accuracy
Measurement of numerical precision as a function of the polynomial degree ($n$). As $n$ increases, the Euler residuals vanish, demonstrating high global accuracy.

| Degree $n=3$ | Degree $n=5$ |
| :---: | :---: |
| ![Euler n3](https://raw.githubusercontent.com/peppecon/Computational-Economics/main/Projection%20Methods%20with%20NGM%20Application/solve_NGM_model/NGM_figures/stochastic/stochastic_labor_euler_errors_3d_n3.png) | ![Euler n5](https://raw.githubusercontent.com/peppecon/Computational-Economics/main/Projection%20Methods%20with%20NGM%20Application/solve_NGM_model/NGM_figures/stochastic/stochastic_labor_euler_errors_3d_n5.png) |
| **Degree $n=10$** | **Degree $n=20$** |
| ![Euler n10](https://raw.githubusercontent.com/peppecon/Computational-Economics/main/Projection%20Methods%20with%20NGM%20Application/solve_NGM_model/NGM_figures/stochastic/stochastic_labor_euler_errors_3d_n10.png) | ![Euler n20](https://raw.githubusercontent.com/peppecon/Computational-Economics/main/Projection%20Methods%20with%20NGM%20Application/solve_NGM_model/NGM_figures/stochastic/stochastic_labor_euler_errors_3d_n20.png) |

---

## Repository Structure

- `./`: Core implementations and comparisons.
  - `chebyshev_loglinear_comparison/`: Codes for the comparison study.
  - `solve_NGM_model/`: Stochastic NGM with endogenous labor.

## Requirements
- Python 3.x
- NumPy, SciPy, Matplotlib

</div>
</div>
