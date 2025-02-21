---
sidebar_position: 3
title: List Articles By Authenticated User
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# GET: List Articles By Authenticated User

**Endpoint:**  
`GET http://api.blug.io/api/v1/blog/articles/author/me/`  

## Description

This endpoint returns **all articles** by the authenticated user, regardless of their state.  
**Accessible by admin only.**

## Headers

- **X-API-KEY:** `{{API_KEY}}`


## Example Request

<Tabs>
  <TabItem value="curl" label="cURL" default>
    <CodeBlock language="bash">
      {`curl --location 'http://api.blug.io/api/v1/blog/articles/author/me/' \\
--header 'X-API-KEY: {{API_KEY}}'`}
    </CodeBlock>
  </TabItem>
</Tabs>

## Example Response

**200 OK**

<Tabs>
  <TabItem value="body" label="Body" default>
    <CodeBlock language="json">
      {`[
    {
      "uuid": "781b721d-c399-421f-9f88-bacc0a8c9fca",
      "author": "2c722e62-66a0-400f-8a70-9b291601c8bd",
      "title": "FMRMDS",
      "subtitle": "string",
      "tags": [
        {
          "uuid": "f66f259f-c7b5-44af-895e-d773fc215486",
          "created": "2025-01-05T13:19:41.412427",
          "last_updated": "2025-01-05T13:19:41.412442",
          "name": "things",
          "slug": "things",
          "user": "197f4efd-abb0-44e8-8bf6-ac48218c06ed"
        },
        {
          "uuid": "8dd64c36-fb49-4aa1-b613-26cbb08f9540",
          "created": "2025-01-05T13:19:41.412457",
          "last_updated": "2025-01-05T13:19:41.412459",
          "name": "trying hard",
          "slug": "trying-hard",
          "user": "197f4efd-abb0-44e8-8bf6-ac48218c06ed"
        }
      ],
      "category": {
        "uuid": "f405dad4-c8c5-49a0-b8b9-a9b69cf83420",
        "user": "197f4efd-abb0-44e8-8bf6-ac48218c06ed",
        "created": "2025-01-05T11:01:23.890886",
        "last_updated": "2025-01-05T11:01:23.890893",
        "name": "Tech & Sports",
        "description": null,
        "cover_image": "https://imgflip.com/gif/931mkx",
        "slug": "tech-sports"
      },
      "slug": "fmrmds",
      "cover_image": "https://imgflip.com/gif/931mkx",
      "content": "string",
      "status": "published",
      "content_type": "html",
      "seo": {
        "uuid": "922b9198-4936-4a0d-b36e-1f1e610370a5",
        "created": "2025-01-05T16:53:27.843159",
        "last_updated": "2025-01-05T16:53:27.843170",
        "og_image": "https://imgflip.com/gif/931mkx",
        "title": "Let us try thins one more tims",
        "description": "string",
        "canonical_url": "",
        "article": "781b721d-c399-421f-9f88-bacc0a8c9fca"
      }
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
    "Cross-Origin-Opener-Policy": "same-origin"
}`}
    </CodeBlock>
  </TabItem>
</Tabs>

