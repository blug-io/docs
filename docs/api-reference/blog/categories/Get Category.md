---
sidebar_position: 2
title: Get Category
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';


# GET: Get Category

**Endpoint:**
`GET http://api.blug.io/api/v1/blog/categories/:id/`

## Description

This request retrieves a single category.

## Headers

- **X-API-KEY:** `{{API_KEY}}`

## Path Variables

- **id** — The unique identifier of the category.
  Example: `fe7c3208-454a-sten-899e-018dd20e9247`


## Example Request

<Tabs>
  <TabItem value="curl" label="cURL" default>
    <CodeBlock language="bash">
      {`curl --location 'http://api.blug.io/api/v1/blog/categories/fe7c3208-454a-sten-899e-018dd20e9247/'`}
    </CodeBlock>
  </TabItem>
</Tabs>

---

## Example Response

**200 OK**

<Tabs>
  <TabItem value="body" label="Body" default>
    <CodeBlock language="json">
      {`{
    "uuid": "fe7c3208-454a-sten-899e-018dd20e9247",
    "name": "Tech & Sports",
    "description": null,
    "cover_image": "https://imgflip.com/gif/931mkx",
    "slug": "tech-sports",
    "articles": []
}`}
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
