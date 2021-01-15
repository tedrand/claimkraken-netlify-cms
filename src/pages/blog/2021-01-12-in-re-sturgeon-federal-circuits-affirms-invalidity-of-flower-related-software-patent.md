---
templateKey: blog-post
title: "In re Sturgeon: Federal Circuits Affirms Invalidity of Flower-Related
  Software Patent"
date: 2021-01-12T16:30:33.722Z
author: Theodore Rand
description: On January 12, 2021, the Federal Circuit affirmed a PTAB finding of
  patent ineligibility under 35 U.S.C. Section 101 for an application reciting
  claims for creating a floral arrangement on an electronic digital display.
featuredpost: true
featuredimage: /img/flower-wallpaper-2295463_1280.jpg
tags:
  - software-patents
  - 35-USC-101
  - subject-matter-eligibility
  - federal-circuit
---
![pink flower blue background](/img/flower-wallpaper-2295463_1280.jpg)

Link to the Case: *[In re Sturgeon](http://www.cafc.uscourts.gov/sites/default/files/opinions-orders/20-1644.OPINION.1-12-2021_1715978.pdf)*

To paraphrase an old English idiom, it is "not all roses" for patent applicants with software-related inventions under the new *Alice* framework. On Tuesday, January 12, 2021, the United States Court of Appeals for the Federal Circuit (CAFC) affirmed a decision by the United States Patent Trial and Appeal Board (PTAB) to uphold an Examiner's rejection of patent claims directed to a method of creating a floral arrangement on an electronic display screen. The case involves U.S. Patent Application No. 14/212,028, and both parties agreed that claim 2 was representative. Representative claim 2 discloses:

A method of creating a floral arrangement on an electronic display screen, the method comprising:

> selecting a flower from an image library comprising a plurality of images for the flower, the plurality of images including images of the flower from different angular positions;<br/>
> placing the flower at a user-selected location in a floral arrangement that is displayed on an electronic display screen;<br/>
> dynamically selecting one of the plurality of images of the flower based on the location of the flower in the floral arrangement; and<br/>
> displaying the selected flower image in the floral arrangement displayed on the display screen.

While the Examiner issued a final rejection on all remaining claims under 35 U.S.C. Section 101 and 102, the PTAB reversed the rejection under Section 102, making the issue squarely based on eligibility when it reached the CAFC.

The CAFC began by reiterating the well-known *Alice* two-step framework, noting that at the first step, the court must "determine whether the claims at issue are directed to" a patent-ineligible concept. The types of ineligible concepts are laws of nature, natural phenomenons, and abstract ideas. Then, if a court finds that claims recite an abstract idea at step one, they "consider the elements of each claim both individually and 'as an ordered combination' to determine whether the additional elements 'transform the nature of the claim' into a patent-eligible application" at step two. Statistically, very few cases go the other way at step two once an abstract idea is found.

## *Alice* Step One

At step one, the patentee Sturgeon conceded that "merely creating a floral arrangement using a computer" is abstract, but that the claim goes further in adding an element of realism to the floral arrangement. However, the CAFC rejected the argument, finding that the PTAB properly found the claim directed to "mental processes," "the abstract idea of managing personal behavior," and "methods of organizing human activity." In this case, the abstract idea is arranging flowers. In some ways, this decision is hard to square with *McRO*, where the CAFC found that methods of setting keyframes for facial animations were not abstract because the computer applied different rules than the human counterpart. Here, creating the arrangement based on pictures taken from different perspectives of the flowers seems different from how a human would create the arrangement in person.

## *Alice* Step Two

At step two, the CAFC agreed with the PTAB that "placing the flower at a user-selected location," and "*dynamically selecting*" an image from the library based on the chosen location, and "*displaying* the selected flower . . . on the display screen" did not differentiate the claim from ordinary mental processes and conventional computer activity. The CAFC took issue with the high level of generality and lack of specific computer implementation in finding a lack of "significantly more" than an abstract idea to raise the claim out of the realm of an abstract idea. It differentiated from the previously mentioned *McRO*, as well as *DDR Holdings,* where the court found "improve\[ments] to computer functionality." 

## Conclusion

Like many of these Section 101 cases, it is simply impossible to find a bright line between what is and is not an improvement to computer functionality. If there was no prior art reference that disclosed *this* method of arranging flowers in a floral arrangement, it is hard to understand why it is not an improvement like that in *DDR Holdings*, where clicking a link for a product redirected the user, not to the seller's website, but instead to a page on the host website that had a "look and feel" of the seller's. It appears that these issues invoke a subtle "quasi-obviousness" analysis as to whether the advance would have been "obvious" based on the functioning of the computer. For instance, in *DDR*, judge Chen noted that the normal behavior of a link on a web page is to direct the user to a *different* host site. Therefore, the patentee was doing something unexpected by redirecting the user to the same website. 

While I don't purport to have the answer as to what would have made these claims pass muster under *Alice*, I enjoy thinking about ways to "come out smelling like roses" on these Section 101 cases. It seems like some automation around determining the different perspectives of the flowers shown to the user based on the configurations could have helped. While some Section 101 cases turn on the notion of preemption—foreclosing further innovation in a broad area of technology, this invention seems to relate to a relatively specific use case (creating floral arrangements).