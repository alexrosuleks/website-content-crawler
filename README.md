# Website Content Crawler: Website Content Scraper API for Python & Node.js (2026)

Crawl whole websites and extract clean text and Markdown for AI models, vector databases, and RAG pipelines. Removes navigation and boilerplate and keeps titles, metadata, and links.

**[▶ Try the Website Content Crawler free on Scrapely](https://scrape.ly/store/querystone/website-content-crawler)** · [Compare Scrapely vs other scraping tools](https://scrape.ly/compare)

This repository shows how to scrape Website Content data with the [Website Content Crawler](https://scrape.ly/store/querystone/website-content-crawler) using the official
**Scrapely SDKs for JavaScript and Python**. You pass the input, Scrapely runs the website content scraper in the cloud
(proxies, retries, browser and scaling included) and returns clean, structured data as JSON, CSV or Excel.
No scraper code to maintain and no blocked requests to debug.

## Why use this Website Content scraper

- **No-code or API:** run it from the [Scrapely Store](https://scrape.ly/store/querystone/website-content-crawler) or from your code with the SDK.
- **Structured website content data:** ready-to-use fields instead of raw HTML.
- **Pay per result:** $0.16 per 1,000 crawled page results, no monthly subscription required.
- **Maintained and monitored:** scrapers are tested around the clock and fixed fast when Website Content changes.
- **Integrations:** n8n, Make, Zapier, LangChain, LlamaIndex, MCP (Claude, Cursor) and webhooks.

## What Website Content data can you extract?

Crawl whole websites and extract clean text and Markdown for AI models, vector databases, and RAG pipelines. Removes navigation and boilerplate and keeps titles, metadata, and links.

## Quick start

1. [Sign up for Scrapely](https://scrape.ly) (free plan available) and copy your API token from
   **Settings → API & Integrations**.
2. Clone this repo and set your token:

```bash
export SCRAPELY_TOKEN=your_token
```

### Node.js (JavaScript SDK)

```bash
npm install
node example.js
```

```js
const { ScrapelyClient } = require('scrapely-client');
const client = new ScrapelyClient({ token: process.env.SCRAPELY_TOKEN });

const run = await client.actor('querystone/website-content-crawler').call({"startUrls": [{"url": "https://docs.python.org/3/tutorial/"}], "maxCrawlPages": 10, "respectRobotsTxtFile": true, "useSitemaps": false, "useLlmsTxt": false, "removeElementsCssSelector": "nav, footer, script, style, noscript, svg, img[src^='data:'],\n[role=\"alert\"],\n[role=\"banner\"],\n[role=\"dialog\"],\n[role=\"alertdialog\"],\n[role=\"region\"][aria-label*=\"skip\" i],\n[aria-modal=\"true\"]", "blockMedia": false, "proxyConfiguration": {"useScrapelyProxy": true}, "storeSkippedUrls": false});
const { items } = await client.dataset(run.defaultDatasetId).listItems();
```

### Python (Python SDK)

```bash
pip install -r requirements.txt
python example.py
```

```python
from scrapely_client import ScrapelyClient
client = ScrapelyClient(os.environ['SCRAPELY_TOKEN'])

run = client.actor('querystone/website-content-crawler').call(run_input={ "startUrls": [ { "url": "https://docs.python.org/3/tutorial/" } ], "maxCrawlPages": 10, "respectRobotsTxtFile": True, "useSitemaps": False, "useLlmsTxt": False, "removeElementsCssSelector": "nav, footer, script, style, noscript, svg, img[src^='data:'],\n[role=\"alert\"],\n[role=\"banner\"],\n[role=\"dialog\"],\n[role=\"alertdialog\"],\n[role=\"region\"][aria-label*=\"skip\" i],\n[aria-modal=\"true\"]", "blockMedia": False, "proxyConfiguration": { "useScrapelyProxy": True }, "storeSkippedUrls": False })
items = list(client.dataset(run.default_dataset_id).iterate_items())
```

### REST API / cURL

```bash
curl -X POST "https://api.scrape.ly/v2/acts/querystone~website-content-crawler/run-sync-get-dataset-items?token=$SCRAPELY_TOKEN" \
  -H "Content-Type: application/json" \
  -d @input.json
```

## Example input

```json
{
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
}
```

See every input option on the [Website Content Crawler page](https://scrape.ly/store/querystone/website-content-crawler).

## Pricing

**$0.16 per 1,000 crawled page results.** Free plan available, no credit card needed to start. Check current pricing on the
[Store page](https://scrape.ly/store/querystone/website-content-crawler) and see how Scrapely compares with other tools on [scrape.ly/compare](https://scrape.ly/compare).

## FAQ

**How do I scrape Website Content with Python?** Install `scrapely-client-python`, set `SCRAPELY_TOKEN` and run
`example.py`. The scraper runs on Scrapely and you read the results from the dataset.

**How do I scrape Website Content with Node.js?** Install `scrapely-client`, set `SCRAPELY_TOKEN` and run `example.js`.

**Is there a website content scraper API?** Yes. Call `POST https://api.scrape.ly/v2/acts/querystone~website-content-crawler/runs`
or use `run-sync-get-dataset-items` to get results in one request.

**Do I need proxies?** No. Proxies, retries and browsers are handled by Scrapely.

**Is scraping Website Content legal?** This scraper collects publicly available data. Check Website Content's terms and the
laws that apply to you, especially for personal data (GDPR, CCPA).

**Can I schedule it or get results by webhook?** Yes. Use Scrapely schedules and webhooks, or n8n, Make and Zapier.

## Looking for an alternative?

Scrapely is an alternative to Apify, Bright Data, ScraperAPI, Firecrawl, Octoparse, PhantomBuster, SerpApi,
Zyte and others. See the side-by-side pricing on [scrape.ly/compare](https://scrape.ly/compare).

---

**Keywords:** website content crawler, website content scraper, website content scraper api, website content scraper python, website content scraper node.js,
scrape website content, website content data extraction, website content crawler, website content api, export website content data to csv, website-content-crawler

License: MIT. Example code only; the scraper runs on [Scrapely](https://scrape.ly/store/querystone/website-content-crawler).
