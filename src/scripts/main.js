'use strict';

const spans = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const populations = [...spans].map(span => +span.textContent.replace(/,/g, ''));
const totalPopulation = populations.reduce((sum, amount) => sum + amount, 0);

total.textContent = totalPopulation.toLocaleString();
average.textContent = (totalPopulation / populations.length).toLocaleString();
