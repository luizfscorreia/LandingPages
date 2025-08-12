<script>
var THANK_YOU_PAGE = "https://click.hr-path.com/l/707483/2025-03-19/3l14ys";

function getCookie(name) {
  var nameEQ = name + "=";
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var c = cookies[i].trim();
    if (c.indexOf(nameEQ) === 0)
      return decodeURIComponent(c.substring(nameEQ.length, c.length));
  }
  return null;
}

function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

var leadCookie = getCookie('lead');
var leadData = null;
try {
  leadData = leadCookie ? JSON.parse(leadCookie) : null;
} catch(e) {
  leadData = null;
}

window.dataLayer = window.dataLayer || [];

if (leadData) {
  window.dataLayer.push({
    event: "pardot_form_submit",
    lead: leadData,
    eventCallback: function() {
      // Pequeno delay para garantir que a tag seja disparada antes do redirecionamento
      setTimeout(function() {
        window.location.href = THANK_YOU_PAGE;
      }, 200);
    }
  });
  deleteCookie("lead");
} else {
  // Caso não tenha lead no cookie, só redireciona direto (opcional)
  window.location.href = THANK_YOU_PAGE;
}
</script>
