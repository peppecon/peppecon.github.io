---
permalink: /
layout: default
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

I am a fifth-year Ph.D. student in Economics at **Bocconi University** in Milan. During the Spring 2025, I visited Princeton University, hosted by [Gianluca Violante](https://violante.economics.princeton.edu/).

My research explores **Macroeconomics**, **Labor Economics**, and **Structural Econometrics**, with a focus on how heterogeneity among workers and firms shapes aggregate economic dynamics and policy outcomes.

---

## News and Updates

<style>
.abstract-container {
  margin: 20px 0;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
}
.abstract-header {
  background-color: var(--tertiary-bg);
  padding: 12px 15px;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: background-color 0.3s ease;
}
.abstract-header:hover {
  background-color: var(--border-color);
}
.abstract-header .arrow {
  transition: transform 0.3s ease;
}
.abstract-header.expanded .arrow {
  transform: rotate(90deg);
}
.abstract-content {
  display: none;
  padding: 15px;
  line-height: 1.8;
  color: var(--text-secondary);
}
.abstract-expanded {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: start;
}
.abstract-expanded .abstract-text {
  font-size: 0.70rem;
  line-height: 1.8;
  text-align: justify;
  hyphens: auto;
  color: var(--text-secondary);
}
.abstract-expanded .abstract-figure {
  text-align: center;
}
.abstract-expanded .abstract-figure img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
@media (max-width: 768px) {
  .abstract-expanded {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="abstract-container">
  <div class="abstract-header">
    <span class="arrow">▶</span>
    <span>"Multidimensional Skills, Learning and Occupational Sorting"</span>
  </div>
  <div class="abstract-content">
    <div class="abstract-expanded">
      <div class="abstract-text">
        In this paper, I study occupational mobility and wage growth over the life cycle when workers have multidimensional, task-specific skills. Using Portuguese administrative data, I show that occupational mobility is informative of both workers sorting on comparative advantage and workers specializing in specific tasks, suggesting that workers can be mismatched along different dimensions. To understand the implications for wage growth and inequality, I develop a dynamic Roy model in which workers (i) have imperfect information about their multidimensional skills and (ii) accumulate task-specific human capital through work experience. Mismatch in the model arises endogenously as workers sort across occupations based on their beliefs. Estimating the model, I find that skills are positively but not perfectly correlated and that there are large differences in task productivity and returns to task experience across occupations. I show that skill mismatch generates substantial wage costs: workers lose 12% of their realized wage at labor market entry, which declines to 8% after 20 years. Low-skilled workers are disproportionately affected, facing costs twice as large as high-skilled workers throughout the life cycle.
      </div>
      <div class="abstract-figure">
        <img src="/images/relative_wage_gains_lifecycle.png" alt="Relative Wage Gains Lifecycle" />
      </div>
    </div>
  </div>
</div>

<script>
document.querySelectorAll('.abstract-header').forEach(header => {
  header.addEventListener('click', function() {
    const content = this.nextElementSibling;
    const isExpanded = content.style.display === 'block';
    
    content.style.display = isExpanded ? 'none' : 'block';
    this.classList.toggle('expanded');
  });
});
</script>
