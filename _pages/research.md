---
layout: default
title: "Research"
permalink: /research/
author_profile: false
---

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
  display: block;
}
.abstract-expanded .abstract-text {
  font-size: 0.95rem;
  line-height: 1.8;
  text-align: justify;
  hyphens: auto;
  color: var(--text-secondary);
}
.draft-button {
  margin-top: 20px;
  text-align: center;
}
.draft-button a {
  display: inline-block;
  padding: 10px 20px;
  background-color: var(--accent-color, #ff6b35);
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 500;
  transition: background-color 0.3s ease;
}
.draft-button a:hover {
  background-color: var(--accent-color-hover, #e55a2b);
}
</style>

## Working Papers

<div class="abstract-container">
  <div class="abstract-header">
    <span class="arrow">▶</span>
    <span>"Multidimensional Skills, Learning and Occupational Sorting"</span>
  </div>
  <div class="abstract-content">
    <div class="abstract-expanded">
      <div class="abstract-text">
        In this paper, I study occupational mobility and wage growth over the life cycle when workers have multidimensional, task-specific skills. Using Portuguese administrative data, I show that occupational mobility is informative of both workers sorting on comparative advantage and workers specializing in specific tasks, suggesting that workers can be mismatched along different dimensions. To understand the implications for wage growth and inequality, I develop a dynamic Roy model in which workers (i) have imperfect information about their multidimensional skills and (ii) accumulate task-specific human capital through work experience. Mismatch in the model arises endogenously as workers sort across occupations based on their beliefs. Estimating the model, I find that skills are positively but not perfectly correlated and that there are large differences in task productivity and returns to task experience across occupations. I show that skill mismatch generates substantial wage costs: on average, workers lose 12% of their realized wage at labor market entry, which declines to 8% after 20 years. These costs are highly heterogeneous and concentrated: low-skilled workers are disproportionately affected, facing costs three times as large as high-skilled workers throughout the life cycle.
      </div>
    </div>
    <div class="draft-button">
      <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5315959" target="_blank" rel="noopener noreferrer">Draft</a>
    </div>
  </div>
</div>

## Work in Progress

- "The Declining Importance of Firms' Internal Labor Market: Evidence From Portugal"

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

