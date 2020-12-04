<?xml version = "1.0" encoding = "UTF-8"?>
<xsl:stylesheet version = "1.0" 
xmlns:xsl = "http://www.w3.org/1999/XSL/Transform">  
<xsl:template match = "/"> 

<html> 
<style>
    *{
        padding: 0;
        margin:0;
        box-sizing: border-box;
    }
    body{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: cursive;
        min-height: 100vh;
        background-color: #232323;
    }
    h2,h3{
        text-align: center;
        font-size: 2em;
        margin-bottom: 2rem;
        color: #2a9d8f;
        text-shadow: 2px 2px #fff;
    }
    h3{
        font-size: 1.5em;
    }
    table{
        border: solid 2px #f4a261;
        color: white;
    }
    th{
        background-color: #f4a261;
    }
    td{
        background-color: #2a9d8f;
        border: solid 2px #f4a261;
    }
</style>
<body> 
    <h2>LIBRARY</h2>
     <h3>Name: Prathamesh Tamanekar   Class/Div:- TE-A  Roll.No:- 147</h3>
    <table> 
    <tr> 
    <th>TITLE</th> 
    <th>AUTHOR</th>  
    <th>PAGES</th>
    <th>YEAR</th> 
    <th>GENRE</th>
   </tr> 
  
    <xsl:for-each select="LIBRARY/BOOK"> 
        <tr bgcolor = "lightblue" height="50"> 
            <td align="center" width="100"><xsl:value-of select = "TITLE"/></td> 
            <td align="center" width="100"><xsl:value-of select = "AUTHOR"/></td> 
            <td align="center" width="100"><xsl:value-of select = "PAGES"/></td> 
            <td align="center" width="100"><xsl:value-of select = "YEAR"/></td> 
            <td align="center" width="100"><xsl:value-of select = "GENRE"/></td>  
        </tr> 
    </xsl:for-each> 
    </table> 
</body> 
</html> 
</xsl:template> 
</xsl:stylesheet>