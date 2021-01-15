---
templateKey: blog-post
title: "iLife Technologies v. Nintendo: Federal Circuit Invalidates Gaming Patents"
date: 2021-01-13T16:48:56.314Z
author: Theodore Rand
description: On Wednesday, January 13, 2021, the United States Court of Appeals
  for the Federal Circuit (CAFC) affirmed the invalidity of U.S. Patent No.
  6,864,796 (the '796 patent) based on eligibility grounds in iLife
  Technologies, Inc. v. Nintendo of America, Inc.
featuredpost: false
featuredimage: /img/mario-1557240__340.jpg
tags:
  - software-patents
  - 35-USC-101
  - subject-matter-eligibility
  - federal-circuit
---
Link to Opinion: [iLife Technologies, Inc. v. Nintendo of America, Inc.](http://www.cafc.uscourts.gov/sites/default/files/opinions-orders/20-1477.OPINION.1-13-2021_1716793.pdf)

![luigi yoshi and mario character figurines](/img/mario-1557240__340.jpg)

On Wednesday, January 13, 2021, the United States Court of Appeals for the Federal Circuit (CAFC) affirmed the invalidity of U.S. Patent No. 6,864,796 (the '796 patent) based on eligibility grounds in *iLife Technologies, Inc. v. Nintendo of America, Inc*. One of Nintendo's infringing embodiments is the safety feature that evaluates body-movement in games like Wii Sports and Mario Kart. The '796 patent recites claims directed to a system that "evaluates relative movement of a body based on both dynamic accelerations" (for instance, vibration or local body movement) and static acceleration (i.e., the position of a body relative to Earth). Claim 1 of the '796 patent recites:

1. A system within a communication device capable of evaluating movement of a body relative to an environment, said system comprising:

> a sensor, associable with said body, that sense dynamic and static accelerative phenomena and static accelerative phenomena of said body, and<br/>
> a processor, associated with said sensor, that processes said sensed dynamic and static accelerative phenomena as a function of at least one accelerative event characteristic to thereby determine whether said evaluated body movement is within environmental tolerance<br/>
> wherein said processor generates tolerance indicia in response to said determination; and<br/>
> wherein said communication device transmits said tolerance indicia.

iLife sued Nintendo for infringement, and the jury found in favor of iLife after the court declined to decide the issue of subject matter eligibility under Section 101. After the jury verdict, Nintendo moved for judgment as a matter of law, and the court granted the motion, holding claim 1 ineligible. It found that iLife's claim 1 was directed to the abstract idea of "gathering, processing, and transmitting information."

## CAFC Analysis

The CAFC began by noting that it reviews JMOL grants according to regional circuit law where the orders are granted. In this case, the Fifth Circuit reviews JMOL orders de novo, and the CAFC affirmed that it does as well. It then set out the familiar *Alice* framework:

1. Determining whether the claims at issue are directed to a patent-ineligible concept, such as an abstract idea.
2. If the claims are directed to an abstract idea, determining whether they contain an "inventive concept" sufficient to transform the abstract idea into patent-eligible subject matter.

### *Alice* Step One

At step one, the CAFC noted that the claim failed to provide any concrete detail for performing the associated functions of the motion sensor system, and instead, "merely amount\[ed] to a system capable of sensing information, processing the collected information, and transmitting processed information." It noted other cases where it found claims for gathering and processing information ineligible, such as *Content Extraction & Transmission LLC v. Wells Fargo Bank, Nat. Ass'n*, 776 F.3d 1343 (Fed. Cir. 2014).

The CAFC rejected iLife's argument that the claim recited a physical system incorporating *improved techniques* for using raw sensor data. The CAFC distinguished claim 1 of the '796 patent from *Thales*, which recited "a particular configuration of inertial sensors and a specific choice of reference frame to more accurately calculate position and orientation of an object on a moving platform." Particularly, it noted the "unconventional configuration of sensors" disclosed in *Thales*. In contrast, it observed the claim at issue as merely reciting a motion sensor system using static and dynamic acceleration information. If anything helpful can be gleaned from the CAFC's distinction here, it may be that invoking claim elements like "reference frame" and "inertial sensors" provide the court with a context that sounds more in "hard tech" and physics rather than simply an array of generic sensors.

Notably, the CAFC found that the district court erred in considering the conventionality of the components in the claims. It elaborated is only relevant at step two of the *Alice* two-step. In pointing this out, the court confirms the notion that an "abstract idea" does not change over time as technology advances. This means that at step 1, an idea's abstractness should not depend on the current state of technology. In recent oral arguments, the CAFC has similarly rejected the notion that hindsight bias has crept into the court's determination at step one.

### *Alice* Step Two

Once step two is reached, very few patent claims survive the jaws of the *Alice* framework unless some data structure or electronic component within the claims is unique and not a generic component. The CAFC agreed with the district court that the claims recited "only generic computer components, including a sensor, a processor, and a communication device."

The court rejected iLife's step two argument that "configuring an acceleration-based sensor and processor to detect and distinguish body movement as a function of both dynamic and static acceleration is an inventive concept." The CAFC looked to the specification, which disclosed that accelerometers with these dual forms of measurement were well-known when the patent application was filed. It noted further that the claims did not recite any unconventional means or method for configuring the sensors or using the information to detect body movement based on dynamic and static acceleration.

## Conclusion

How the CAFC distinguished from *Thales,* in this case, resounds the notion that there is a sort of "quasi-nonobviousness" analysis within the *Alice* framework. For a software-related invention of this type to pass muster under *Alice*, there seems to be a need for some difference between the abstract idea's expected implementation and how the computer system actually works.