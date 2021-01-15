---
templateKey: blog-post
title: "Boom Goes the Dynamite: Federal Circuit Invalidates Boom! Payments Claims"
date: 2021-01-14T14:03:26.703Z
author: Theodore Rand
description: In "explosive" fashion, the United States Court of Appeals for the
  Federal Circuit (CAFC) obliterated three patents for confirming the
  consummation of transactions on January 13, 2021. The patents explain
  circumstances where buyers and sellers may not wish to exchange payments at
  the initial transaction time, such as when they agree to meet up later to
  exchange the goods and money.
featuredpost: true
featuredimage: /img/boom_pyramd_-7241830716-_-cropped-_-cropped-.jpg
tags:
  - software-patents
  - 35-USC-101
  - subject-matter-eligibility
  - federal-circuit
---
![BOOM image](/img/boom_pyramd_-7241830716-_-cropped-_-cropped-.jpg)

Link to Opinion: [Boom! Payments, Inc. v. Stripe, Inc.](http://www.cafc.uscourts.gov/sites/default/files/opinions-orders/20-1274.OPINION.1-13-2021_1716816.pdf)

In "explosive" fashion, the United States Court of Appeals for the Federal Circuit (CAFC) obliterated three patents for confirming the consummation of transactions on January 13, 2021. Boom! Payments, Inc. appealed a decision from the United States District Court for the Northern District of California holding all U.S. Patents 8,429,084, 9,235,857, and 10,346,840 (the '084, '857, and '840 patents respectively) ineligible under 35 U.S.C. Section 101.

## The Patent Claims

The patents explain circumstances where buyers and sellers may not wish to exchange payments at the initial transaction time, such as when they agree to meet up later to exchange the goods and money. The patents present a solution to the problem wherein the buyer provides its payment information to an online marketplace when it tentatively agrees to purchase the transaction. A database stores that payment information, and the buyer receives a "buyer identifier." When the buyer accepts the seller's item(s), it provides the seller with the buyer identifier, who provides that identifier back to the online marketplace. The online marketplace then authorizes the payment. While the claim is quite long to include in this post, it essentially lays out the steps just described.

## Analysis

The CAFC began by setting out the *Alice* two-step framework for determining subject matter eligibility under 35 U.S.C. Section 101. It noted that it determines whether the claims are directed to a law of nature, natural phenomenon, or abstract idea in step one of the two-step. If the court finds that they are, then it proceeds to step two to determine if the claims nonetheless recite an "inventive concept" sufficient to transform the claim into patent-eligible subject matter. The CAFC noted that at step two, "the mere recitation of a generic computer cannot transform a patent-ineligible abstract idea into a patent-eligible invention." 

### *Alice* Step One

When the district court conducted the analysis, it found that the claims "combine the concept of escrow—using a third party to hold payment until a condition is satisfied—with the idea of using identification codes to authorize a transaction” and therefore were directed to the abstract idea of authenticating internet sales through a third-party intermediary. At the CAFC, Boom argued that the claims recited a technological improvement over prior art systems for confirming online payments and recited *specific steps* for processing an online payment. The CAFC disagreed, observing that they only described actions for "passing information back and forth by a computer." It pulled out the Merriam-Webster definition of escrow. It held that the claims resembled those in *Alice*, where the Supreme Court found abstract claims for "exchanging financial obligations between two parties using a third-party intermediary to mitigate settlement risk."

Boom argued that the "buyer identifier" as a specific means for confirming the transaction distinguished the claims from a conventional escrow. But the CAFC found that such an identifier could just as easily be used to verify a transaction without using computers and was therefore not a *technological solution*. While the reasoning is pretty much in line with *Alice*, the frustrating part about this case is that the buyer identifier seems somewhat unique to the transaction's digital nature. In other words, could this be done in the "pen and paper world"? Yes. But would it even be necessary? I don't know. It seems like one could argue that the solution is, in fact, "rooted in computer technology," similar to the claims in *DDR Holdings v. Hotels.com*.

### *Alice* Step Two

Having found the claims related to an abstract idea, the CAFC moved to step two of the *Alice* analysis, where patentees have historically had almost no chance of overturning the result of invalidity since *Alice* came down. Boom argued that the use of the buyer identifier constitutes an inventive concept since it "increase\[s] online payment security without making the payment flow burdensome on either the buyer or the seller." But, unsurprisingly, the CAFC agreed with the defendant, Stripe, that the buyer identifier served only to authenticate the transaction and was not rooted in a technological problem or solution. It looked to the patent's specification, which stated that confirmation codes were routed when the patent application was filed. It also agreed with Stripe that it was proper to dismiss the case in a 12(b)(6) motion without considering further facts since Boom's complaint did not provide any plausible *factual allegations* to support the assertions that the elements of the claims were not "routine and conventional."

## Conclusion

While Boom argued that the district court erred further in finding that the remaining claims were substantially similar to those addressed in the court's 101 analysis, however, the CAFC found Boom's assertion overly-formalistic, noting that "\[c]ourts may treat a claim as representative in certain situations, such as if the patentee does not present any meaningful argument for the distinctive significance of any claim limitations not found in the representative claim." The CAFC held that it would "defy reason" to consider "substantially identical" claims in further litigation.

While this case is not surprising based on *Alice* and recent CAFC precedent, it is somewhat troubling that all of these financial services-related inventions fall into this same bucket of abstractness without really having a chance to be considered based on what was in the prior art. In this case, Boom lost on a 12(b)(6) motion to dismiss. It should serve as a stark warning for those in the financial sector to consider whether or not to patent technology that could, in any way, be construed as a form of escrow.