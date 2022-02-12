export default function printResume() {
  let ContentToPrint = document.getElementById("resume")
  let PrintWindow = window.open(
    "",
    "",
    "left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0"
  )
  PrintWindow.document.write(ContentToPrint.innerHTML)
  document
    .querySelectorAll("link")
    .forEach((link) =>
      PrintWindow.document.head.appendChild(link.cloneNode(true))
    )
  document
    .querySelectorAll("style")
    .forEach((link) =>
      PrintWindow.document.head.appendChild(link.cloneNode(true))
    )
  PrintWindow.document.close()
  setTimeout(() => {
    PrintWindow.focus()
    PrintWindow.print()
    PrintWindow.close()
  }, 1000)
}
