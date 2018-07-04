# Bar-Chart-with-textbox

### Using JavaScript, HTML, CSS, jQuery and no other libraries, this web application will be fed an array of stock data. 

### Preview

#### Try this link: [Bar-Chart-with-textbox](https://joycedelatorre.github.io/Bar-Chart-with-textbox/)

![preview](https://github.com/joycedelatorre/Bar-Chart-with-textbox/blob/master/images/preview.png "preview")

#### ** Instructions on how to run this app **
	1. Clik the above link (Try this link).
	2. A dataset is already provided but user can edit it.(Provided it is a valid json)
	3. Once dataSet is entered click submit.
	4. The user can check the checkbox to calculate the number of selected items, sum, average and highest Price.
	5. If by any chance the link does not work. You can clone the repository by clicking the clone or download button. Copy the https URL provided from the toggled box.
	6. In your CLI, type in `git clone https://github.com/joycedelatorre/Bar-Chart-with-textbox.git`  (This will create a folder locally)
	7. Open index.html in your browser. 

#### **With the following fields:**
	1. name
	2. price
	3. marketCap

##### A **bar chart** will display the market cap in **DESCENDING** order with the name of the stock to each bar. Tooltip were used to provide added information about the price and market cap of each bar hovered.

##### **Checkbox** were provided for the user to track the **Number Selected**, calculate the **Total Price and Average Price**.

##### A **Table** was included to display the results of checkboxes that were clicked. This is updated in accordance to the stocks that were clicked or unclicked.

#### **Four Metrics of Table**
	1. Number Selected - how many stocks are selected
	2. Total Price - the sume of the prices of the selected stocks
	3. Average Price - the average price of the selected stocks
	4. Stock with Highest Price - the name of the stock with the highest Price

#### **Added Feature**
* I added a textbox with a submit button so that users will be able to enter their updated JSON datasets 
* Also when new charts are submitted the chart should clear the old chart and rerender a new chart with a new table.

