---
sidebar_position: 3
title: Fetch API Keys
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# GET: Fetch API Keys

**Endpoint:**
`GET: http://api.blug.io/api/v1/auth/api-key/`

## Description

This endpoint retrieves the **public state**.

## Example Request

<Tabs>
  <TabItem value="curl" label="cURL" default>
    <CodeBlock language="bash">
      {`curl --location 'http://api.blug.io/api/v1/auth/api-key/'`}
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
        "public_state": "VYYGewz.lz8KN9qAsD1RjiRbQzNNGyjaoiItqvn3",
        "uuid": "e3620ec6-129d-44a8-8611-0c323cae7966",
        "created": "2024-12-11T01:29:36.336399+01:00"
      },
      {
        "public_state": "QCr6Gfw.w3yiJWUmdFzw3IZUkspwK8DxZ9T0Ao7H",
        "uuid": "9af585d2-9a43-446c-acf5-f019aea888f2",
        "created": "2024-12-11T01:30:44.060444+01:00"
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
