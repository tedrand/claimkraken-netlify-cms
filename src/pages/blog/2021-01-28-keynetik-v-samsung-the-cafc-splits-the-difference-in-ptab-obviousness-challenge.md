---
templateKey: blog-post
title: "KEYnetik v. Samsung: The CAFC Splits the Difference in PTAB Obviousness
  Challenge"
date: 2021-01-28T13:18:22.143Z
author: Theodore Rand
description: On January 27, in KEYnetik, Inc. v. Samsung Electronics Co., Ltd.,
  the United States Court of Appeals for the Federal Circuit (CAFC)
  affirmed-in-part, vacated-in-part and remanded an obviousness determination by
  the Patent Trial and Appeal Board (PTAB).
featuredpost: true
featuredimage: /img/love-5388903_1280.jpg
tags:
  - federal-circuit
  - 35-USC-103
  - obviousness
---
**Link to Case:** [KEYnetik, Inc. v. Samsung Electronics Co., Ltd.](http://www.cafc.uscourts.gov/sites/default/files/opinions-orders/20-1271.OPINION.1-27-2021_1723945.pdf)

On January 27, in KEYnetik, Inc. v. Samsung Electronics Co., Ltd., the United States Court of Appeals for the Federal Circuit (CAFC) affirmed-in-part, vacated-in-part and remanded an obviousness determination by the Patent Trial and Appeal Board (PTAB). While the CAFC affirmed the finding of obviousness of certain claims and agreed with the PTAB’s holding of a motivation to combine for invalidated claims 4, 7, 15, and 18, it vacated and remanded the obviousness determination concerning these claims for the Board to determine if there was a reasonable expectation of success. 
The patent, U.S. Patent No. 8,370,106, recites a system, method, and article for processing motion. The system uses motion sensors and an orientation detector to detect motion “such as movement and rest.” The system also includes an “interference state machine” for storing sequences of “detected motion conditions” and producing a profile description therefor. One embodiment discusses using these states of motion to allow a user to answer an incoming call on a handheld phone by a sequence of gestures. Samsung Electronics Co., Ltd. (Samsung) filed a petition for inter partes review (IPR), and the PTAB found all the claims obvious. 

## Analysis

The case involves challenges to constructions of two limitations in independent claims 1 and 12 and arguments relating to the motivation to combine two references to render dependent claims 4, 7, 15, and 18. 

### The orientation detector limitation

 The first argument that the CAFC addressed related to “an orientation detector to detect orientation towards gravity for each slow motion phase.” The PTAB’s construction (under the BRI standard) of this claim “encompasse\[d] multiple orientation detections for a given slow motion phase” and did not preclude orientations for “fast motion phases.” The CAFC rejected KEYnetik’s argument that the claim did not permit multiple orientations to be detected during the slow phase, pointing to the word “for.” Instead, it reiterated the finding of the PTAB that a construction allowing for multiple orientation detections was consistent with the English usage of the word “each.” It found significant expert testimony supporting the notion that the claim did not require more than one slow motion phase. But it also observed that “each” indicates a set with “potentially multiple members.” 

### The sequence limitation

The CAFC then rejected KEYnetik’s argument that “an interference state machine . . . configured to: maintain a sequence of the detected orientations toward gravity, each orientation in the sequence being limited to a slow motion phase,” precluded storing orientations detected during fast motion in the claimed sequence. It sided with the PTAB, which interpreted the limitation as not requiring the state machine to limit the maintained sequence to slow motion phases actively. 

![](/img/ptab-illustration.png "PTAB Illustration of Sequence Step")

The CAFC looked to an example proffered by the PTAB, which showed fast motion states being stored despite not having corresponding slow motion orientations. It rebuked KEYnetik’s argument that the PTAB’s construction was inconsistent with the prosecution history. Upon an initial rejection, KEYnetik amended the claims by adding “each orientation in the sequence being limited to a slow motion phase.” Despite the amendment and accompanying explanation in the response, the PTAB remained unpersuaded that the statements amounted to a “clear disclaimer of claim scope.” The CAFC ultimately agreed with the PTAB on this point, agreeing that the claims did not prohibit detecting and maintaining orientations during fast motion phases (even though the system would not calculate the orientation for these phases). 

### Motivation to Combine

The CAFC then looked to the PTAB’s finding of a motivation to combine two prior art references in finding claims 4, 7, 15, and 18 obvious and invalid. The first reference, Linjama, disclosed computer program products to sense orientations or sequences of mobile devices’ gestures. The second reference, Tosaki, recited moving an input device and a game processor that converted the physical quantities associated with the movement into a detection signal. One example discussed by the PTAB for a game reciting Tasaki was a fishing simulation game.\
The PTAB found a motivation to combine the two references to achieve a result that would “only detect\[] orientation during a slow motion phase” would improve the user experience by ensuring that unintended movements are not detected. Stunningly the PTAB also agreed with Samsung’s argument that such a modification would “save power.” The PTAB found the assertion unrebutted and supported by “convincing” expert testimony. The argument is interesting because detecting whether an event is “slow motion” requires an additional determining function within the software that would presumably increase computation requirements. However, if such results were being sent to an external database through a network protocol, those network connections would likely require more computation than the aggregation of filtering functions to reduce those network requests. 
The CAFC also rejected KEYnetik’s argument that the two references teach away from each other because Linjama teaches detecting motion AND orientation. In contrast, Tosaki only teaches detecting one or the other. It found no reason why combining the functions would “result in a direction divergent from that taken by the patentee,” and therefore why a person of ordinary skill in the art (a POSITA) would be discouraged from combining the two references. 

### Reasonable Expectation of Success

While the CAFC agreed with the PTAB’s reasoning regarding the motivation to combine, it found a legal error in the statement that a petitioner has no burden to show a POSITA would have had a reasonable expectation of success combining the references. Since it found the determination in error, the CAFC vacated the obviousness determination for claims 4, 7, 15, and 18 and remanded the case to the PTAB to make the determination.

## O’Malley’s Concurrence in part and dissent in part

Judge O’Malley agreed with CAFC in remanding the case for dependent claims 4, 7, 15, and 18 but took issue with the orientation detector limitation and sequence limitation findings of the independent claims.\
Concerning the “orientation detector” limitation, O’Malley found the PTAB’s construction to defy the claim’s plain language and found its construction of the word “each” defiant of standard English usage. O’Malley observed that, contrary to the PTAB’s finding, nothing in the claim language permitted detection of multiple orientations during a slow motion phase. She went on to note that the claim did not recited “detect\[ing] orientations” (plural), but rather “orientation.” O’Malley stated that while it is improper to limit claims to their preferred embodiments, such embodiments can shed light on the claims’ intended scope. O’Malley pointed to Figure 3 of the specification, which is also cited in the majority, and plainly indicates a single orientation for each slow motion phase. 

![Figure 3 of Patent](/img/fig3.png)

O’Malley went on to reject the PTAB’s construction of “each” as one or more, noting that the CAFC had previously recognized the meaning of “each” to refer to “two or more” people or things.\
Turning to the sequence limitation, O’Malley found the PTAB’s interpretation as reading the “limited to a slow motion phase” language out of the claim. She agreed with KEYnetik that the limitation precluded orientations detected during fast motion from being maintained in the sequence. O’Malley noted that reading out the limitation defeated the purpose of the invention, as failing to detect fast motion would result in there being “no way to confirm that the sequence was the product of an intentional user action.”