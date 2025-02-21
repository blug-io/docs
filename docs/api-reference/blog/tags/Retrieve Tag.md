---
sidebar_position: 2
title: Retrieve Tag
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# GET: Retrieve Tag

**Endpoint:**
`GET http://api.blug.io/api/v1/blog/tags/:id/`

## Description

This endpoint is used to **fetch a particular tag** using a GET request.

## Headers

- **X-API-KEY:** `{{API_KEY}}`

## Path Variables

- **id** — The unique identifier of the tag.

## Example Request

<Tabs>
  <TabItem value="curl" label="cURL" default>
    <CodeBlock language="bash">
      {`curl --location 'http://api.blug.io/api/v1/blog/tags/:id/'`}
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
    "uuid": "cfac49c4-5224-4d1f-9345-3c0d2ef514a9",
    "name": "javascript",
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
    "Cross-Origin-Opener-Policy": same-origin,
}`}
    </CodeBlock>
  </TabItem>
</Tabs>
