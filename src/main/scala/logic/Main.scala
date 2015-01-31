package logic

import scala.scalajs.js
import js.annotation.JSExport
import scala.scalajs.js.Dynamic.{global => g}

object ScreepGlobalScope extends js.GlobalScope {
  def module:js.Dynamic = js.native
}

object Main {

  def doIt(): Int = 2+2

  ScreepGlobalScope.module.main = doIt
}
