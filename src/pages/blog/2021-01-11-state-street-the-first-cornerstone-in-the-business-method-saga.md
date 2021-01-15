---
templateKey: blog-post
title: "State Street: The First Cornerstone in the Business Method Saga"
date: 2021-01-11T19:13:56.194Z
author: Theodore Rand
description: In State Street, the Federal Circuit denied the application of the
  mathematical algorithm exception to patentability and put to rest the Business
  Method Exception.
featuredpost: false
featuredimage: /img/valid.jpg
tags:
  - software-patents
  - business-methods
  - 35-USC-101
  - subject-matter-eligibility
  - federal-circuit
---
**Link to Case:** [State St. Bank & Trust Co. v. Signature Fin. Grp., 149 F.3d 1368 (Fed. Cir. 1998)]("https://www.courtlistener.com/opinion/756414/state-street-bank-trust-co-v-signature-financial-group-inc/")

![valid button on keyboard](/img/valid.jpg)

## Background

In 1998, the United States Court of Appeals for the Federal Circuit (the CAFC) issued a monumental §101 decision in *State Street*. In what is now seen as a sort of an anti-landmark of §101 jurisprudence, the *State Street* case was related to a patent (the ‘056 patent) entitled “Data Processing System for Hub and Spoke Financial Services Configuration.” The system, identified by the proprietary name Hub and Spoke®, facilitates a structure where mutual funds (Spokes) pool their assets in an investment portfolio (Hub), as a partnership, thereby combining the advantage of economic scale with the tax advantage of a partnership. State Street brought a declaratory judgment action asserting invalidity, unenforceability, and non-infringement. The district court subsequently granted a motion for partial summary judgment under §101.

## Analysis

The CAFC began by reiterating that the issue of subject matter validity under §101 is a matter of both claim construction and statutory construction; and that the Federal Circuit reviews these issues *de novo*. The CAFC then reversed the finding of partial summary judgment, finding Signature’s claims to be directed to statutory subject matter. They began the analysis by noting the claims’ technical nature and the “virtual necessity” of a computer to the claimed system. They also noted the prosecution history and the fact that the Examiner contemplated a §101 rejection before Signature canceled its method claims, observing that the district court had construed the claims to be directed to a process.

> However, “machine” claims having “means” clauses may only be reasonably viewed as process claims if there is no supporting structure in the written description that corresponds to the claimed “means” elements.<sup>1</sup>

The CAFC noted that “means” referred to in each claimed component should read, under § 112, ¶ 6, as inclusive of the “equivalents” disclosed in the written description, but the claim as a whole referred to a system.

In rejecting the district court’s contention that the claims fell into one of two alternative judicially-created exceptions to statutory subject matter, the CAFC emphasized the broad language expressed in the patent statute. They found it improper to “read limitations into § 101 … where the legislative history indicates that Congress clearly did not intend such limitations.”

### 1. The “Mathematical Algorithm” Exception

In analyzing the district court’s application of the “Mathematical Algorithm” exception, the CAFC emphasized that “\[u]npatentable mathematical algorithms are identifiable by showing they are merely abstract ideas constituting disembodied concepts or truths that are not ‘useful.’” The court compared the claims at issue to those in *Alappat*, where claims directed to transforming data through mathematical calculations to display on a rasterizer constituted a practical application.

The CAFC held that Signature’s system for transforming data into a final share price constituted a practical application because it produced “a useful, concrete and tangible result.” They found that the district court erred in applying the Freeman-Walter-Abele test, pointing out that the test has “little, if any, applicability to determining the presence of statutory subject matter.” The CAFC particularly emphasized that *Alappat* held “it is no ground for holding a claim is directed to nonstatutory subject matter to say it includes or is directed to an algorithm.” It said that with *Diehr*, calculations are still within §101 so long as the claim’s operation produced a “useful, concrete, and tangible result.”

### 2. The “Business Method” Exception

After rejecting the district court's transformation test as related to the mathematical exception, the CAFC also rejected the premise of the “Business Method” exception. The CAFC opined that the exception merely represented the “application of some general, but no longer applicable legal principle, and that since the 1952 Patent Act, business methods should have been subject to the same legal requirements for patentability as applied to any other process.

The CAFC discussed several cases that invoked the “Business Method” exception as a secondary consideration of a finding of invalidity and expressed their concern that the exception had been used in places meant for anticipation analysis. In responding to the district court’s reasoning that “the ‘056 Patent is claimed \[sic] sufficiently broadly to foreclose virtually any computer-implemented accounting method necessary to manage this type of financial structure,” the CAFC argued that “\[w]hether the patent’s claims are too broad to be patentable is not to be judged under § 101, but rather under §§ 102, 103 and 112.”

In finally rejecting the reasoning underlying the “Business Method” exception, the CAFC alluded to the MPEP’s deletion of a paragraph of §706.03(a), which cited *Hotel Security Checking Co. v. Lorraine Co.* as the basis for treating business methods differently.

### Claim 1 of U.S. Patent No. 5,193,056 (the ‘056 Patent)

1. A data processing system for managing a financial services configuration of a portfolio established as a partnership, each partner being one of a plurality of funds, comprising:

> (a) computer processor means \[a personal computer including a CPU] for processing data;<br/>
> (b) storage means \[a data disk] for storing data on a storage medium;<br/>
> (c) first means \[an arithmetic logic circuit configured to prepare the data disk to magnetically store selected data] for initializing the storage medium;<br/>
> (d) second means \[an arithmetic logic circuit configured to retrieve information from a specific file, calculate incremental increases or decreases based on specific input, allocate the results on a percentage basis, and store the output in a separate file\ for processing data regarding assets in the portfolio and each of the funds from a previous day and data regarding increases or decreases in each of the funds, [sic, funds’] assets and for allocating the percentage share that each fund holds in the portfolio;<br/>
> (e) third means \[an arithmetic logic circuit configured to retrieve information from a specific file, calculate incremental increases and decreases based on specific input, allocate the results on a percentage basis and store the output in a separate file] for processing data regarding daily incremental income, expenses, and net realized gain or loss for the portfolio and for allocating such data among each fund;<br/>
> (f) fourth means \[an arithmetic logic circuit configured to retrieve information from a specific file, calculate incremental increases and decreases based on specific input, allocate the results on a percentage basis and store the output in a separate file] for processing data regarding daily net unrealized gain or loss for the portfolio and for allocating such data among each fund; and<br/>
> (g) fifth means \[an arithmetic logic circuit configured to retrieve information from specific files, calculate that information on an aggregate basis and store the output in a separate file] for processing data regarding aggregate year-end income, expenses, and capital gain or loss for the portfolio and each of the funds.<br/>

*State St. Bank & Tr. Co. v. Signature Fin. Grp.*, 149 F.3d 1368, 1371-72 (Fed. Cir. 1998)

\[1] 149 F.3d 1368, 1371 (Fed. Cir. 1998).