/* eslint-disable */
import React from 'react'
/* eslint-enable */

import components from 'components/markdown'
import md from 'markdown-in-js'

import postLayout from 'layouts/post'

export const frontmatter = {
  title: 'Terms of Service',
  slug: 'tos',
  date: '08 April 2018',
  static: true
}

export default postLayout(frontmatter)(md(components)`
## Terms

By accessing the website at [microlink.io](https://microlink.io), you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.

## Use License

1. Permission is granted to temporarily download one copy of the materials (information or software) on Microlink HQ's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:

  - modify or copy the materials;
  - use the materials for any commercial purpose, or for any public display (commercial or non-commercial);
  - attempt to decompile or reverse engineer any software contained on Microlink HQ's website;
  - remove any copyright or other proprietary notations from the materials; or
  - transfer the materials to another person or "mirror" the materials on any other server.

2. This license shall automatically terminate if you violate any of these restrictions and may be terminated by Microlink HQ at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.

## Disclaimer

1. The materials on Microlink HQ's website are provided on an 'as is' basis. Microlink HQ makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.

2. Further, Microlink HQ does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.

## Limitations

In no event shall Microlink HQ or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Microlink HQ's website, even if Microlink HQ or a Microlink HQ authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.

## Accuracy of materials

The materials appearing on Microlink HQ's website could include technical, typographical, or photographic errors. Microlink HQ does not warrant that any of the materials on its website are accurate, complete or current. Microlink HQ may make changes to the materials contained on its website at any time without notice. However Microlink HQ does not make any commitment to update the materials.

## Links

Microlink HQ has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Microlink HQ of the site. Use of any such linked website is at the user's own risk.

## Modifications

Microlink HQ may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.

## Governing Law

These terms and conditions are governed by and construed in accordance with the laws of European Union and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
`)
