---
templateKey: blog-post
title: "Alice Corp. v. CLS Bank: The Supreme Court's Latest Word on Software
  Eligibility"
date: 2021-01-06T16:54:08.252Z
author: Theodore Rand
description: "In Alice Corp. Pty. Ltd. v. CLS Bank Int'l, the Supreme Court set
  the new standard for software patentability under 35 U.S.C. Section 101. "
featuredpost: false
featuredimage: /img/alice-in-wonderland-symbols.jpg
tags:
  - supreme-court
  - software-patents
  - subject-matter-eligibility
  - 35-USC-101
---
In *Alice Corp. Pty. Ltd. v. CLS Bank Int'l*, the Supreme Court set out a new standard for subject matter eligibility under 35 U.S.C. Section 101. While the case was only decided about six years ago in 2014, it has profoundly impacted the patent laws, particularly when it comes to software patents. 

## Background

Alice's patents disclosed a computer-implemented scheme for mitigating "settlement risk" - the risk that only one party to a financial transaction will pay what it owes. The claims invoked a third-party intermediary as a limitation to perform the transactional steps recited in the claims. Representative claim 33 of the United States Patent No. 5,970,479 (the '479 patent) recites:

33. A method of exchanging obligations as between parties, each party holding a credit record and a debit record with an exchange institution, the credit records and debit records for exchange of predetermined obligations, the method comprising the steps of:

> (a) creating a shadow credit record and a shadow debit record for each stakeholder party to be held independently by a supervisory institution from the exchange institutions;
>
> (b) obtaining from each exchange institution a start-of-day balance for each shadow credit record and shadow debit record;
>
> (c) for every transaction resulting in an exchange obligation, the supervisory institution adjusting each respective party's shadow credit record or shadow debit record, allowing only these transactions that do not result in the value of the shadow credit record at any time, each said adjustment taking place in chronological order, and
> (d) at the end-of-day, the supervisory institution instructing on\[e] of the exchange institutions to exchange credits or debits to the credit record and debit record of the respective parties in accordance with the adjustments of the said permitted transactions, the credits and debits being irrevocable, time invariant obligations placed on the exchange institutions.

After parsing out the claim elements, the Supreme Court held that it amounted to "program code for performing the method of exchanging obligations." It noted that after the Court had decided *Bilski v. Kappos* in 2011, both parties had filed cross-motions during litigation at the District Court addressing the question of subject matter eligibility. On appeal, the United States Court of Appeals for the Federal Circuit (CAFC) reversed, finding it "not manifestly evident" that the claims recited an abstract idea. Then, the CAFC granted an en banc rehearing and reversed its previous holding, affirming the District Court's holding of invalidity. Writing for the plurality, Judge Lourie focused on the Supreme Court's rule in *Mayo Collaborative Services v. Prometheus Laboratories Inc.* Under the test in *Mayo* (which has come to be known as the *Alice* two-step test), a court first identifies whether a claim recites an "abstract idea." If it does, the court examines whether the claim amounts to "significantly more" than the abstract idea.

## Analysis

The Court began its analysis by reviewing 35 U.S.C. Section 101 and its history within the statutory scheme of the Patent Act. It noted the long-held judicial exception to the general exception that "anything under the sun" is patentable. The exception excludes from patent eligibility laws of nature, natural phenomena, and abstract ideas. It observed the purpose of the exclusions--preventing a patent that "would pre-empt use of \[an] approach in all fields, and would effectively grant a monopoly over an abstract idea." It then qualified this reasoning, cautioning against construing the principle in a way that would "swallow all of patent law."

In what has become an essential test for subject matter eligibility in the federal courts, the Supreme Court defined the *Alice* two-step analysis: "First, we determine whether the claims at issue are directed to one of \[the] patent-ineligible concept. If so, we ask, '\[w]hat else is there in the claims before us?'" Crucially, it elaborated on step 2, noting that it entails a process of determining whether an element or combination of elements amounts to "significantly more than a patent upon the \[ineligible concept] itself."

## Step 1: Whether the claims at issue are directed to a patent-ineligible concept

Performing Alice step 1, the court noted that the abstract idea exception was at play in the analysis. It looked to Benson, where it had rejected the validity of claims "involving an algorithm for converting binary-coded decimal numerals into pure binary form." It stressed that the claims effectively covered the algorithm. It then discussed Bilski, wherein it recently held claims for a method of hedging against financial risk as abstract and patent-ineligible. The Court found that, like in Bilski, Alice's claims were directed to a fundamental economic practice: "Petitioner's claims involve a method of exchanging financial obligations between two parties using a third-party intermediary to mitigate settlement risk.". 

It also rejected the argument that the abstract idea exception was limited to "preexisting, fundamental truth\[s]," that "exis\[t] in principle apart from any human action," observing that Bilski undermines that reasoning since risk-hedging is also not a "fundamental economic truth."  

It also rejected the argument that the abstract idea exception was limited to "preexisting, fundamental truth\[s]," that "exis\[t] in principle apart from any human action," observing that Bilski undermines that reasoning since risk-hedging is also not a "fundamental economic truth."  

## Step 2: Whether the additional elements amount to "significantly more"

After finding the claims directed to the abstract idea of intermediated settlement, the Supreme Court analyzed the additional elements of the claim and found them insufficient to "transform that abstract idea into a patent-eligible invention." The Court looked to Mayo, where the patents at issue related to a method for measuring metabolites in the bloodstream to calibrate the appropriate dosage of thiopurine in the treatment of autoimmune diseases. The Court denied the argument that the claims were an application of the underlying natural laws, stating that the methods for determining metabolite levels were already well-known in the art, and the process amounted to "nothing significantly more than an instruction to doctors to apply the applicable laws when treating their patients." 

The Court noted that the introduction of a computer does not alter the analysis at step 2, noting that the claims included "a general purpose computer in Benson." It stated that "simply implementing a mathematical principle on a physical machine, namely a computer, \[i]s not a patentable application of that principle." In other words, adding the words "apply it with a computer" cannot make claims patentable.

Alice argued that the claims' steps "require\[d] a substantial and meaningful role of the computer." It created electronic records, tracked multiple transactions, and issued simultaneous instructions. But the Court rejected this argument resounding its reasoning that "each step does no more than require\[ing] a generic computer to perform generic computer functions." It noted that the claims did not, for example, improve the functionality of the computer itself or any other technology or technical field.

## System and Storage Medium Claims

While the Court addressed the claims to a system for performing the functions and a storage medium for storing them, it rejected the claims for substantially the same reasons. It observed that nearly all computers contained the components listed in the respective claims and that they were no different from the substance's method claims. It reiterated the unpatentability of generic components such as those in these claims and warned that claims should be interpreted "in ways that make patent eligibility 'depend simply on the draftsman's art.'"