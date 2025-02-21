---
sidebar_position: 4
title: Article Detail
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# GET: Article Detail

**Endpoint:**
`GET http://api.blug.io/api/v1/blog/articles/:id/`

## Description

This request uses the fetches the details of a created blog.

## Headers

- **X-API-KEY:** `{{API_KEY}}`

## Path Variables

- **id** — The unique identifier of the article.

## Example Request

<Tabs>
  <TabItem value="curl" label="cURL" default>
    <CodeBlock language="bash">
      {`curl --location 'http://api.blug.io/api/v1/blog/articles/f3e84ff8-a19e-4fd2-9350-2b8cb1b46aa6/'`}
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
    "uuid": "f3e84ff8-a19e-4fd2-9350-2b8cb1b46aa6",
    "author": "19698e62-5a51-4343-ba49-dbf59068f75a",
    "title": "Cahnge the title to testimorny",
    "subtitle": "Searching Nemo",
    "tags": [
      {
        "uuid": "b8dc0738-9401-44d6-a05d-ef3156da404c",
        "created": "2025-01-08T14:13:23.163797",
        "last_updated": "2025-01-08T14:13:23.163806",
        "name": "china",
        "slug": "china",
        "user": "19698e62-5a51-4343-ba49-dbf59068f75a"
      }
    ],
    "category": {
      "uuid": "362f3b23-620a-47d3-b0c4-a3781f3c14d7",
      "user": "19698e62-5a51-4343-ba49-dbf59068f75a",
      "created": "2025-01-08T14:04:35.982933",
      "last_updated": "2025-01-08T14:04:35.982946",
      "name": "Tech & Sports",
      "description": null,
      "cover_image": "https://imgflip.com/gif/931mkx",
      "slug": "tech-sports"
    },
    "slug": "cahnge-the-title-to-testimorny",
    "cover_image": "https://imgflip.com/gif/931mkx",
    "content": "string",
    "status": "published",
    "content_type": "html",
    "seo": {
      "uuid": "98e59140-c9b3-48c9-aeb1-d9e24e2be883",
      "created": "2025-01-08T14:11:52.504428",
      "last_updated": "2025-01-08T14:11:52.504433",
      "og_image": "https://imgflip.com/gif/931mkx",
      "title": "This is a meta title",
      "description": "This is a meta description",
      "canonical_url": "https://medium.com/@user/my-meta-post",
      "article": "f3e84ff8-a19e-4fd2-9350-2b8cb1b46aa6"
    }
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
    "Cross-Origin-Opener-Policy": "same-origin"
}`}
    </CodeBlock>
  </TabItem>
</Tabs>
