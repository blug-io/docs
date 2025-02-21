---
sidebar_position: 2
title: Create API Key
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# POST: Create API Key

**Endpoint:**
`POST http://api.blug.io/api/v1/auth/api-key/`  

## Description

This endpoint is used to **create a new API key** for authentication.


## Example Request

<Tabs>
  <TabItem value="curl" label="cURL" default>
    <CodeBlock language="bash">
      {`curl --location --request POST 'http://api.blug.io/api/v1/auth/api-key/'`}
    </CodeBlock>
  </TabItem>
</Tabs>

---

## Example Response

**201 Created**

<Tabs>
  <TabItem value="body" label="Body" default>
    <CodeBlock language="json">
      {`{
  "public_state": "ZstenhfPk.eVPLvAdystendDY6CrXoE8pWPg9WW",
  "uuid": "8404e656-12d2-4f21-9e91-12c9f11d356b",
  "created": "2024-12-11T01:31:29.131973+01:00"
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
