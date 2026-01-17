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
        How does imperfect information about skills shape occupational sorting and wage growth over the life cycle? I address this question by developing and estimating a dynamic Roy model in which workers (i) enter the labor market with imperfect information about their multidimensional skills and (ii) accumulate task-specific human capital through work experience. Sorting on beliefs rather than true comparative advantage endogenously generates mismatch. Estimating the model on Portuguese administrative data, I find that skill uncertainty generates wage costs of 4.3% at labor market entry, declining to 1.3% after twenty years as workers learn and improve their sorting across occupations. These costs are concentrated among specialists, workers with strong comparative advantage in one dimension, while generalists lose little from uncertainty. Across demographic groups, female workers experience the largest losses. The framework provides a natural setting to study how information frictions affect labor market adjustment to technological change.
      </div>
      <div style="margin-top: 15px; font-size: 0.9rem; color: var(--text-secondary);">
        <strong>Presented at:</strong> Bocconi, Princeton Junior Macro Seminar, Milan PhD Workshop, 1st Aarhus Workshop on Labor Markets (Poster), 2025 European Winter Meeting of the Econometric Society, CEPR Paris Symposium 2025 (Poster), BeNA Labor Economics Workshop
      </div>
    </div>
    <div class="draft-button">
      <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5315959" target="_blank" rel="noopener noreferrer">Draft</a>
    </div>
  </div>
</div>

## Work in Progress

- "Structural Change and the Flattening of the Within-Firm Occupational Job Ladder"

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

