package logic

import scala.scalajs.js
import js.annotation.JSExport
import js.Dynamic.{ global => g }
@JSExport
object Main {
  g.console.log("OMG WAT?")
  @JSExport
  def doIt(): Int = 2+2
}
