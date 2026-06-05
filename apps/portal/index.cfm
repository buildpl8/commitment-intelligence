<cfsetting showdebugoutput="false">
<cfcontent type="application/json; charset=utf-8">
<cfif structKeyExists(url, "action") AND url.action EQ "health">
<cfoutput>{"status":"ok","service":"portal"}</cfoutput>
<cfelse>
<cfoutput>{"service":"portal","message":"Commitment Intelligence portal scaffold initialized."}</cfoutput>
</cfif>
