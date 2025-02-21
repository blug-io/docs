---
sidebar_position: 3
title: List Tags
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# GET: List Tags

**Endpoint:**
`GET http://api.blug.io/api/v1/blog/tags/`

## Description

This request retrieves a list of blog tags.

## Headers

- **X-API-KEY:** `{{API_KEY}}`

## Example Request

<Tabs>
  <TabItem value="curl" label="cURL" default>
    <CodeBlock language="bash">
      {`curl --location 'http://api.blug.io/api/v1/blog/tags/'`}
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
      "uuid": "268a9ead-584f-43e9-8fdb-d5593e79f2b9",
      "created": "2025-01-05T11:08:00.999944",
      "last_updated": "2025-01-05T11:08:00.999961",
      "name": "python",
      "slug": "python",
      "user": "197f4efd-abb0-44e8-8bf6-ac48218c06ed"
    },
    {
      "uuid": "ef62a804-ea21-46c7-a3d0-90004928a4dc",
      "created": "2025-01-05T11:10:18.338420",
      "last_updated": "2025-01-05T11:10:18.338428",
      "name": "javascript",
      "slug": "javascript",
      "user": "197f4efd-abb0-44e8-8bf6-ac48218c06ed"
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
    "Cross-Origin-Opener-Policy": same-origin,
}`}
    </CodeBlock>
  </TabItem>
</Tabs>
