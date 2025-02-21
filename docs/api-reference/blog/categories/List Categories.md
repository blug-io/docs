---
sidebar_position: 3
title: List Categories
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# GET: List Categories

**Endpoint:**
`GET http://api.blug.io/api/v1/blog/categories/`

## Description

This request retrieves a list of blog categories.

## Headers

- **X-API-KEY:** `{{API_KEY}}`

## Description

The `GET /blog/categories/` endpoint retrieves a list of blog categories.

## Example Request

<Tabs>
  <TabItem value="curl" label="cURL" default>
    <CodeBlock language="bash">
      {`curl --location 'http://api.blug.io/api/v1/blog/categories/'`}
    </CodeBlock>
  </TabItem>
</Tabs>

---

## Example Response

**200 OK**

<Tabs>
  <TabItem value="body" label="Body" default>
    <CodeBlock language="json">
      {`[
    {
      "uuid": "b9847bc9-2a50-4d96-afc5-4e4f842830bd",
      "name": "Tech & Sports",
      "description": null,
      "cover_image": "https://imgflip.com/gif/931mkx",
      "slug": "tech-sports"
    },
    {
      "uuid": "ea992093-2dd3-45c5-b9c4-de0ac1347add",
      "name": "Apple Products",
      "description": null,
      "cover_image": "https://imgflip.com/gif/931mkx",
      "slug": "apple-products"
    }
]`}
    </CodeBlock>
  </TabItem>

  <TabItem value="headers" label="Headers">
    <CodeBlock language="json">
      {`{
  "Content-Type": "application/json",
  "Date": "Mon, 08 Jan 2025 14:00:00 GMT",
  "Server": "WSGIServer/0.2 CPython/3.11.11",
  "Vary": "Accept, origin",
  "Allow": "GET, PUT, PATCH, DELETE, HEAD, OPTIONS",
  "X-Frame-Options": "DENY",
  "Content-Length": "1187",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "same-origin",
  "Cross-Origin-Opener-Policy": "same-origin",
}`}
    </CodeBlock>
  </TabItem>
</Tabs>


