---
sidebar_position: 4
title: Delete API Key
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# DELETE: Delete API Key

**Endpoint:**
`DELETE: http://api.blug.io/api/v1/auth/api-key/:id/`

## Description

This endpoint deletes an **API Key**.

## Headers

- **X-API-KEY:** `{{API_KEY}}`

## Path Variables

- **id** — The unique identifier of the article.

## Example Request

<Tabs>
  <TabItem value="curl" label="cURL" default>
    <CodeBlock language="bash">
      {`curl --location --request DELETE 'http://api.blug.io/api/v1/auth/api-key/:id/'`}
    </CodeBlock>
  </TabItem>
</Tabs>

---

## Example Response

**204 No Content**

<Tabs>
  <TabItem value="headers" label="Headers" default>
    <CodeBlock language="json">
      {`{
  "Date": "Mon, 08 Jan 2025 14:00:00 GMT",
  "Server": "WSGIServer/0.2 CPython/3.11.11",
  "Vary": "Accept, origin",
  "Allow": "GET, PUT, PATCH, DELETE, HEAD, OPTIONS",
  "X-Frame-Options": "DENY",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "same-origin",
  "Cross-Origin-Opener-Policy": "same-origin"
}`}
    </CodeBlock>
  </TabItem>
</Tabs>
