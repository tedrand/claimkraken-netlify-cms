---
templateKey: blog-post
title: "Tracking CAFC Opinions with CourtListener and Python: Part 1"
date: 2021-08-09T19:32:15.539Z
author: Theodore Rand
description: In this blog post, I will discuss how to collect opinions from the
  United States Court of Appeals for the Federal Circuit (CAFC) using Python
  tools. This is the first part of a multi-part series that is meant to provide
  lawyers and others in the legal industry with code for working with legal
  data.
featuredpost: true
featuredimage: /img/markus-spiske-iar-afb0qqw-unsplash.jpg
---
**Here's a Link to the Code for this post:** https://github.com/tedrand/Court-Tracking-Tutorial/tree/main/Part%201

Regardless of what you think about the latest opinions, one great thing about patent law is that the United States Court of Appeals for the Federal Circuit (CAFC) is a single appellate court that controls much of how patent laws are applied. For this reason, many patent practitioners would find relevant an application that tracks the CAFC and can inform the practitioner of new decisions. Some tools, like Westlaw or Lexis Nexis, are available but at a high cost. Other tools, like [DocketNavigator](https://brochure.docketnavigator.com/), are available at a lower price. But they also may require some understanding of complex tooling.

It may not make sense for a company to sell an application that delivers opinions from just one court or even just a subset of that. Thankfully, we can. And quickly at no cost. This blog post will explain how to create a court tracker with the CourtListener API and Python. In future posts, I will also discuss some ways to visualize this data to be the most useful. 

So, without further ado, let’s dive in.



## Step 1: Obtain a CourtListener API Key

As noted on the [homepage of CourtListener.com](https://www.courtlistener.com/): “CourtListener is a free legal research website containing millions of legal opinions from federal and state courts.” CourtListener is sponsored by a 501(c)(3) organization called the Free Law Project. Not only is CourtListener a good resource in itself for finding legal opinions through its user interface, but it also exposes its data through an API.

To learn more about CourtListener’s API, scroll down to the bottom of the page and click on [the tab that says “APIs and Bulk Data.”](https://www.courtlistener.com/api/) After clicking that link, it will go to a page that shows three options for accessing CourtListener’s data. For us, the “API” option will be what we want because we want the most up-to-date data without necessarily copying ALL of CourtListener’s data onto a server. 

### Wait, hold up. What’s an API??

Many of us in the IP community have some vague understanding of what an application programming interface (API) is after the *Google v. Oracle* opinion earlier in 2021. However, it may not be immediately apparent why we are using one in this situation.

First of all, the CourtListener API is a REST API—that is, it “conforms to the constraints of REST architectural style and allows for interaction with RESTful web services.” The web server that it allows us to interact with is its server containing the court data. Essentially, it will enable you to send a request containing URL-encoded variables specifying, e.g., what court to collect data from, what date range, etc. It will return data according to those variables. 

You can find much more detail about how CourtListener stores data on its server by visiting the REST API home page. So, I am not going to go into more depth here. But readers should recognize that this is a complex service. While CourtListener does a great job as a free service, there may be discrepancies between what we receive from CourtListener and the absolute truth we seek. 



## Step 2: Install Anaconda

As someone who likes to control what software is on my computer, I first cringed at the thought of installing this bloated thing called “Anaconda,” which [the website describes as a “Python distribution platform.”](https://anaconda.org/) But I’ve slowly converted, and it is now the primary way I work with Python. Essentially it is a distribution of Python 3 that comes with some popular data libraries—and, importantly, environments that support implementations of those libraries in a single application. 

> **Note:** If you do not want to use Anaconda, you can also use your distribution of Python 3 along with the libraries accessed by the code in this blog post. I am not going to discuss in detail how to install all of the libraries in this post, but they are all readily installable using the Package Installer for Python (pip). 

To install Anaconda for free, click [the tab that says “Individual Edition”](https://www.anaconda.com/products/individual) and download the version specified for your platform. After downloading Anaconda, you should only need to walk through the installation process steps to complete the installation.

> **Note:** If you plan on using Anaconda directly from your terminal or command prompt application, then you may want to check the box that says, “Add Anaconda to PATH.” I do this and have never had to reinstall Anaconda, but you should make the decision that makes the most sense for you.

### “Optional” (but you should do it!) Step 2A: Protecting your CourtListener API Key

First of all, if you KNOW that you will not publicly share the code you write for this tutorial, then you can skip this step. However, I would strongly encourage you to do this, because it is good practice. It is never wise to have an API Key written directly into Python code. You may share that Python code with someone else or host it in a public location, and if it has your API key in it, the people you share it with will have access to the key. CourtListener and other API hosts rate limit these keys to prevent misuse, so it is dangerous to share your API key publicly.

To prevent this, we will create a “.env” file in the directory we are working in to load the key into our file with the Python code. To do this:

**1.** From your application launcher, open the “Anaconda Powershell Prompt.” From the prompt, run the following code: 

```
conda install -c conda-forge python-dotenv
```

**2.** In the directory where you will be putting this code, create a file called “.env” and set the add the following line to the file using a text editor:

```
CL_API_KEY=YOUR_API_KEY
```

Be sure to replace **“YOUR_API_KEY”** with the API key you obtained in step 1 of this blog post.



## Step 3: Requesting Federal Circuit Opinions and Save them as a CSV File

Now that we have set up our environment, we can finally get to the code and get some CAFC opinions. This step will save the data in a comma-separated value (CSV) file because CSV files are versatile for storing data and are compatible with Microsoft Excel. You can execute all of the code for this step from a command prompt or terminal. But I will use a Jupyter Notebook because it has a beginner-friendly (and just friendly) interface that allows execution of a single piece of code within a larger file. In addition, when you execute code in a Jupyter Notebook, it will save the execution result for use with subsequent execution steps. So if you mess something up, you may need to restart the kernel. Here we go.

#### **1. Open Jupyter Notebook.**

Search for and launch the “Jupyter Notebook” application, which came with Anaconda, from your application launcher. It should open a tab in your browser that shows the working directory. Make sure the “.env” file you created in Step 2 is available from this directory. If not, you can create a text file directly from the Jupyter Notebook interface and enter the information into a “.env” file that way.

#### **2. Create a New Python 3 Notebook.**

From the directory interface, click the button that says “New” near the upper right-hand corner of the page, and select “Python 3” under the “Notebook” tab. This command will create a notebook for you to run the code to get the CAFC opinion data. Name the file so that you can remember what it is later on.

#### **3. Install Libraries.**

While Python is a robust interpreter with many built-in functions, you will need additional libraries for, e.g., loading the variable from your “.env” file. Place the following code into the first cell of your Jupyter Notebook, and then hit Shift+Enter to execute it.

```
# Load the .env file to set the API Key
from dotenv import load_dotenv

# provides the ability to check for system variables set by the .env file
import os

load_dotenv()
```

> **Note:** You can skip this step if you went rogue and did not create a “.env” file.

Then, add this code to the next cell and execute it. 

```
# allows us to request the data from 
import requests

# allows to recognize and load the data in the form that it is encoded: 
#    JavaScript Object Notation (JSON)
import json

# allows us to work with the data in a variety of ways before sending
# it to the output
import pandas as pd
```

#### **4. Collect the recent CAFC Opinions.**

Now we are going to run a simple query to collect the most recent CAFC Opinions on CourtListener. This block is the part of this code that you will most likely wish to extend, so I will create some variables that you can easily modify for other use cases. 

```
# Setting some constants here: (1) the BASE_URL and HEADERS 
BASE_URL = 'https://www.courtlistener.com/api/rest/v3/'

# This will be appended to the BASE_URL to get the specific data for
# this exercise. There are MANY other ways that you can collect data
# from CourtListener
CAFC_OPINIONS_URL_STRING = "opinions/?cluster_docket_court_id=cafc"

# The Headers object will be passed into the API request to 
# include our API key.
HEADERS = {'Authorization': 'Token {}'.format(os.getenv("CL_API_KEY"))}

# This is the file that we will be saving the data to
CAFC_OPINIONS_DATA = "cafc_opinions_data.csv"
```

#### **5. Organize the Data as an Array of Objects.**

Now that we have the data in JSON format, we want to “package it up” to send to our CSV file. There are many ways to do this, but for this simple example, we will put the data into a simple Pandas DataFrame, perform some minimal preprocessing to obtain the case name, and then save some of the columns of the DataFrame to a CSV.

**5a. Create the Pandas DataFrame.** Pandas is a potent data science tool for Python. It makes working with data extremely easy, and we will not go too far under the hood to see how all of these commands work. But if you find this helpful, you may want to check out [the Pandas documentation](https://pandas.pydata.org/docs/) to see how all of these commands work.

```
# Convert the JSON results from the API request into a pandas "DataFrame"
cafc_opinions_df = pd.DataFrame(CAFC_OPINIONS_JSON)
```

**5b. Add the case names as a column to the Pandas DataFrame.** Surprisingly, the opinion’s request result does not return a data string for each row with the name of the case to which the opinion pertains. But we can get that value by requesting the “cluster” URL associated with each entry of the opinions data. The following code (1) creates an array to hold case names, (2) attempts to grab the case name by requesting the respective cluster, and (3) appends the resulting array as a column to the Pandas DataFrame

```
# Create an empty array that stores case names
case_names = []

# Iterate over the cluster URLs in the DataFrame
for value in cafc_opinions_df["cluster"]:
    
# Send a request to CourtListener for the cluster
cluster = requests.get(value, headers=HEADERS)
    
# If there is no case name, set it to the resource_uri       
try:
    case_names.append(cluster.json()["case_name"])
except:
    case_names.append("NA")
    print(value + " HAS NO CASE NAME")
    pass

# Add the 
cafc_opinions_df["case_name"] = case_names  
```

#### **6. Create a CSV using the Data from the DataFrame.**

Now that we’ve created a DataFrame with the data we want, we can save select columns to a CSV file that we can open in an app like Microsoft Excel.

```
cafc_opinions_df.to_csv(
    "cafc_opinions.csv", 
    mode = 'w', 
    columns = ['case_name', 'date_created', 'download_url', 'page_count'],
    index=False
)
```

# Conclusion

Since this tutorial is already quite long, I will make another post discussing how to create a user interface (UI) with the Python library, Flask, and basic HTML and JavaScript.