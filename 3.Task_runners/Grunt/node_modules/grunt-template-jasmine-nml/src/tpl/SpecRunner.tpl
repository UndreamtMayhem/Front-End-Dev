<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Jasmine Spec Runner</title>
  <link rel="shortcut icon" type="image/png" href="<%= temp %>/jasmine_favicon.png">
<% css.forEach(function(style){ %>
  <link rel="stylesheet" type="text/css" href="<%= style %>">
<% }) %>

</head>
<body>
<!-- NODE MODULE LOADER -->
<% with (scripts) { %>
  <% [].concat(polyfills, jasmine, boot, vendor, reporters).forEach(function(script){ %>
  <script src="<%= script %>"></script>
  <% }) %>
  <script src="<%= temp %>/loader.js"></script>
<% }; %>
</body>
</html>
