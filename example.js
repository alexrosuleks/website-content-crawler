// Website Content Crawler with the Scrapely JavaScript SDK (scrapely-client).
// Install: npm install scrapely-client
// Run:     SCRAPELY_TOKEN=your_token node example.js
const { ScrapelyClient } = require('scrapely-client');

const client = new ScrapelyClient({ token: process.env.SCRAPELY_TOKEN });

async function main() {
    const input = {
        "startUrls": [
            {
                "url": "https://docs.python.org/3/tutorial/"
            }
        ],
        "maxCrawlPages": 10,
        "respectRobotsTxtFile": true,
        "useSitemaps": false,
        "useLlmsTxt": false,
        "removeElementsCssSelector": "nav, footer, script, style, noscript, svg, img[src^='data:'],\n[role=\"alert\"],\n[role=\"banner\"],\n[role=\"dialog\"],\n[role=\"alertdialog\"],\n[role=\"region\"][aria-label*=\"skip\" i],\n[aria-modal=\"true\"]",
        "blockMedia": false,
        "proxyConfiguration": {
            "useScrapelyProxy": true
        },
        "storeSkippedUrls": false
    };

    // Start the scraper on Scrapely and wait for it to finish.
    const run = await client.actor('querystone/website-content-crawler').call(input);

    // Read the scraped results from the run's dataset.
    const { items } = await client.dataset(run.defaultDatasetId).listItems();
    console.log(`Scraped ${items.length} results`);
    console.log(JSON.stringify(items, null, 2));
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
