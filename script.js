const productInput = document.querySelector("#productInput");
const marketSelect = document.querySelector("#marketSelect");
const searchButton = document.querySelector("#searchButton");
const finderOutput = document.querySelector("#finderOutput");

const marketLabels = {
  global: "global market",
  nigeria: "Nigeria",
  uk: "the United Kingdom",
  usa: "the United States",
  china: "China/Asia suppliers",
  europe: "Europe",
};

const marketSearches = {
  global: [
    ["Google", "https://www.google.com/search?q="],
    ["Alibaba", "https://www.alibaba.com/trade/search?SearchText="],
    ["Amazon Business", "https://www.amazon.com/s?k="],
  ],
  nigeria: [
    ["Google Nigeria", "https://www.google.com/search?q="],
    ["Jumia", "https://www.jumia.com.ng/catalog/?q="],
    ["Tradeford Nigeria", "https://nigeria.tradeford.com/search?q="],
  ],
  uk: [
    ["Google UK", "https://www.google.co.uk/search?q="],
    ["Amazon UK", "https://www.amazon.co.uk/s?k="],
    ["eBay UK", "https://www.ebay.co.uk/sch/i.html?_nkw="],
  ],
  usa: [
    ["Google USA", "https://www.google.com/search?q="],
    ["Amazon", "https://www.amazon.com/s?k="],
    ["Thomasnet", "https://www.thomasnet.com/search.html?cov=NA&what="],
  ],
  china: [
    ["Alibaba", "https://www.alibaba.com/trade/search?SearchText="],
    ["Made-in-China", "https://www.made-in-china.com/products-search/hot-china-products/"],
    ["Global Sources", "https://www.globalsources.com/search?query="],
  ],
  europe: [
    ["Google Europe", "https://www.google.com/search?q="],
    ["Europages", "https://www.europages.co.uk/companies/"],
    ["Amazon EU", "https://www.amazon.de/s?k="],
  ],
};

function buildFinderResult() {
  const product = productInput.value.trim();
  const market = marketSelect.value;
  const label = marketLabels[market];

  if (!product) {
    finderOutput.innerHTML = "<p>Enter a product above to generate a sourcing path.</p>";
    productInput.focus();
    return;
  }

  const encoded = encodeURIComponent(`${product} suppliers wholesale distributor`);
  const links = marketSearches[market]
    .map(([name, url]) => `<a href="${url}${encoded}" target="_blank" rel="noreferrer">${name}</a>`)
    .join("");

  finderOutput.innerHTML = `
    <h3>Sourcing path for ${product}</h3>
    <p>Target: ${label}. Start with supplier discovery, then move into verification and delivery planning.</p>
    <ul>
      <li>Confirm product specification, quantity, packaging, and acceptable alternatives.</li>
      <li>Compare at least three suppliers by price, lead time, documentation, and communication quality.</li>
      <li>Ask for photos, certifications where needed, payment terms, delivery terms, and warranty conditions.</li>
      <li>Check freight, customs, destination charges, and after-delivery support before ordering.</li>
      <li>Use Achievers Hub Global Limited to coordinate research, supplier comparison, and procurement planning.</li>
    </ul>
    <div class="finder-links">${links}</div>
  `;
}

searchButton.addEventListener("click", buildFinderResult);
productInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    buildFinderResult();
  }
});
