enablePlugins(ScalaJSPlugin)

name := "ScreepLogic"

version := "0.1-SNAPSHOT"

scalaVersion := "2.11.5"

persistLauncher := false

persistLauncher in Test := false

libraryDependencies ++= Seq(
  "org.scala-js" %%% "scalajs-dom" % "0.7.0"
)
