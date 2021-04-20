(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{102:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?r.a.createElement(m,s(s({ref:t},c),{},{components:n})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},103:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n(16),r=n(104);function o(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,i=o.forcePrependBaseUrl,s=void 0!==i&&i,l=o.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(s)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+p:p}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},104:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(102)),i=(n(103),{id:"java",title:"Java"}),s={unversionedId:"development-infrastructure/continuous-integration/java",id:"development-infrastructure/continuous-integration/java",isDocsHomePage:!1,title:"Java",description:"The Foundation hosts several Java projects and provides a good level of support for building, testing and releasing Java code.",source:"@site/../docs/development-infrastructure/continuous-integration/java.mdx",sourceDirName:"development-infrastructure/continuous-integration",slug:"/development-infrastructure/continuous-integration/java",permalink:"/docs/development-infrastructure/continuous-integration/java",editUrl:"https://github.com/finos/open-developer-platform/edit/master/website/../docs/development-infrastructure/continuous-integration/java.mdx",version:"current",frontMatter:{id:"java",title:"Java"},sidebar:"mainSidebar",previous:{title:"C#",permalink:"/docs/development-infrastructure/continuous-integration/csharp"},next:{title:"Javascript",permalink:"/docs/development-infrastructure/continuous-integration/javascript"}},l=[{value:"Build",id:"build",children:[]},{value:"Artifact publishing",id:"artifact-publishing",children:[{value:"Publishing settings",id:"publishing-settings",children:[]},{value:"Maven Central Badge",id:"maven-central-badge",children:[]}]},{value:"Release",id:"release",children:[{value:"Release settings",id:"release-settings",children:[]},{value:"Known issues",id:"known-issues",children:[]}]},{value:"Project Documentation",id:"project-documentation",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Foundation hosts ",Object(o.b)("a",{parentName:"p",href:"https://github.com/finos?q=&type=&language=java"},"several Java projects")," and provides a good level of support for building, testing and releasing Java code."),Object(o.b)("p",null,"The most adopted (68% in 2016, ",Object(o.b)("a",{parentName:"p",href:"https://pages.zeroturnaround.com/RebelLabs-Developer-Productivity-Report-2016.html"},"according to RebelLabs"),") build tool for Java is ",Object(o.b)("a",{parentName:"p",href:"https://maven.apache.org/"},"Apache Maven"),", which provides a standard, modular, convention-based model to build and publish your Java projects; as such, the Foundation provides a Maven Module called ",Object(o.b)("a",{parentName:"p",href:"https://github.com/finos/finos-parent-pom"},"Parent POM"),", containing build configurations that can be easily inherited by the single projects; in provides:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Plugin configuration for the most common Maven functionalities"),Object(o.b)("li",{parentName:"ol"},"Nightly-built (in Maven terms, snapshots) deployment into Sonatype OSS public repository (oss.sonatype.org)"),Object(o.b)("li",{parentName:"ol"},"Release deployment on the Central Repository"),Object(o.b)("li",{parentName:"ol"},"Rules to validate Central Repository code requirements"),Object(o.b)("li",{parentName:"ol"},"Other integrations for checks and validations")),Object(o.b)("p",null,"You can also adopt other Java build tools, such as ",Object(o.b)("a",{parentName:"p",href:"https://gradle.org/"},"Gradle"),", ",Object(o.b)("a",{parentName:"p",href:"https://ant.apache.org/"},"Ant"),", ",Object(o.b)("a",{parentName:"p",href:"https://leiningen.org/"},"Leiningen")," or others, assuming that they are able to interact with the Central Repository."),Object(o.b)("h2",{id:"build"},"Build"),Object(o.b)("p",null,"The build process aims to produce reusable Java binaries (",Object(o.b)("strong",{parentName:"p"},"artifacts"),", in Maven terms) in a reliable and reproducible way, from every contributor or consumer workstation; special build requirements should be documented in the project homepage."),Object(o.b)("p",null,"The Maven command to build artifacts is ",Object(o.b)("inlineCode",{parentName:"p"},"mvn package"),"."),Object(o.b)("h2",{id:"artifact-publishing"},"Artifact publishing"),Object(o.b)("p",null,"All Java projects hosted by the Foundation are expected to use a groupId that is (or prefixed by) ",Object(o.b)("inlineCode",{parentName:"p"},"org.finos")," and are published on the ",Object(o.b)("a",{parentName:"p",href:"https://search.maven.org/#search%7Cga%7C1%7Corg.finos"},"Maven central repository")," (also known as Maven Central)."),Object(o.b)("p",null,"In order to publish artifacts (in Maven terms, ",Object(o.b)("strong",{parentName:"p"},"artifact deployment"),"), it's necessary to setup some accounts and configure the workstation accordingly; please note that these steps are not mandatory for all project teams, but only for those performing artifact deployment and releases (normally the project lead or a team member elected as release manager)."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Sign up on ",Object(o.b)("a",{parentName:"li",href:"https://issues.sonatype.org"},"https://issues.sonatype.org")," (",Object(o.b)("inlineCode",{parentName:"li"},"https://oss.sonatype.org")," Maven repo will use these credentials for authentication)."),Object(o.b)("li",{parentName:"ol"},"Email ",Object(o.b)("a",{parentName:"li",href:"mailto:help@finos.org"},"help@finos.org"),", with the GitHub URL of your project, and your Sonatype Jira ID (from step 1)"),Object(o.b)("li",{parentName:"ol"},"Update your Maven ",Object(o.b)("inlineCode",{parentName:"li"},"settings.xml")," file as ",Object(o.b)("a",{parentName:"li",href:"#publishing-settings"},"shown below"),"; using Maven encrypted passwords is strongly advised, to avoid setting up the password in clear text")),Object(o.b)("p",null,"At this point, you can proceed with the deployment of the snapshot artifacts, by simply invoking ",Object(o.b)("inlineCode",{parentName:"p"},"mvn deploy")," from the project root folder; as a result, artifacts will be publicly available on ",Object(o.b)("a",{parentName:"p",href:"https://oss.sonatype.org"},Object(o.b)("inlineCode",{parentName:"a"},"oss.sonatype.org"))," and usable by anyone as Maven dependencies."),Object(o.b)("p",null,"You can find more info on the ",Object(o.b)("a",{parentName:"p",href:"https://central.sonatype.org/pages/apache-maven.html#distribution-management-and-authentication"},"Central Repository howto page for Maven"),"."),Object(o.b)("h3",{id:"publishing-settings"},"Publishing settings"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"<settings>\n  <servers>\n    <server>\n      <id>ossrh</id>\n      <username>[your-sonatype-jira-id]</username>\n      <password>[your-sonatype-jira-pwd]</password>\n    </server>\n    <server>\n      <id>ossrh-distro</id>\n      <username>[your-sonatype-jira-id]</username>\n      <password>[your-sonatype-jira-pwd]</password>\n    </server>\n  </servers>\n</settings>\n")),Object(o.b)("h3",{id:"maven-central-badge"},"Maven Central Badge"),Object(o.b)("p",null,"A badge can be added at the top of the project's root-level ","[README.md]"," file, using the following Markdown syntax:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[![Maven Central](https://img.shields.io/maven-central/v/org.finos/<project name>.svg?maxAge=2592000)](https://search.maven.org/#artifactdetails%7Corg.finos%7C<project name>%7C2%7Cpom)\n")),Object(o.b)("p",null,"If you want to run this process continuously for each commit, you can integrate with ",Object(o.b)("a",{parentName:"p",href:"intro"},"Travis CI or other Continuous Integration systems"),"."),Object(o.b)("h2",{id:"release"},"Release"),Object(o.b)("p",null,"The Maven release process performs the following activities:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Verify that there are no uncommitted changes in the local workspace."),Object(o.b)("li",{parentName:"ol"},"Prompt the user for the desired tag, release and development version names."),Object(o.b)("li",{parentName:"ol"},"Modify and commit release information into the pom.xml file."),Object(o.b)("li",{parentName:"ol"},"Tag the entire project source tree with the new tag name."),Object(o.b)("li",{parentName:"ol"},"Extract file revisions versioned under the new tag name."),Object(o.b)("li",{parentName:"ol"},"Deploy the versioned artifacts to appropriate local and remote repositories.")),Object(o.b)("p",null,"All the configurations documented in the section above (see snapshot deployment) also apply to the release process; additionally, it is required to:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"https://central.sonatype.org/pages/working-with-pgp-signatures.html"},"Install gpg")," on the local workstation where the release process is invoked"),Object(o.b)("li",{parentName:"ol"},"Configure ",Object(o.b)("a",{parentName:"li",href:"#release-settings"},"settings.xml as shown below")),Object(o.b)("li",{parentName:"ol"},"Test a snapshot deployment (see above), to make sure that you can authenticate against Sonatype servers")),Object(o.b)("p",null,"At this point you can ",Object(o.b)("strong",{parentName:"p"},"proceed with the release"),":"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"export GPG_TTY=$(tty)")),Object(o.b)("li",{parentName:"ol"},"Run the maven command ",Object(o.b)("inlineCode",{parentName:"li"},"mvn release:prepare release:perform -Prelease"),"; the release profile will provide javadocs, sources and gpg signature configuration for the build; if you're not using ",Object(o.b)("inlineCode",{parentName:"li"},"finos-parent-pom"),", you'd need to configure these plugins by yourself; feel free to copy bits and pieces from the ",Object(o.b)("a",{parentName:"li",href:"https://github.com/finos/finos-parent-pom/blob/master/pom.xml"},"FINOS parant ",Object(o.b)("inlineCode",{parentName:"a"},"pom.xml"))),Object(o.b)("li",{parentName:"ol"},"Promote the staged artifacts by accessing the ",Object(o.b)("a",{parentName:"li",href:"https://central.sonatype.org/pages/releasing-the-deployment.html"},"Nexus staging repositories")," to:\na. Identify which repository refers to the release process performed on step ",Object(o.b)("strong",{parentName:"li"},"#1"),". Look at the description column to identify the specific project (look towards bottom of list).\nb. Select the staging repository. To release the request, click the ",Object(o.b)("inlineCode",{parentName:"li"},"Close")," (button on top menu) the release request - this operation will trigger a validation of the artifacts to be released\nc. Click on the refresh button to update status of repository.  Click on ",Object(o.b)("inlineCode",{parentName:"li"},"Release")," (button on top menu) to sync artifacts with the Central Repository and remove staging repository. ")),Object(o.b)("p",null,"Upon release, your component will be published to Central: this typically occurs within 10 minutes, though updates to ",Object(o.b)("a",{parentName:"p",href:"https://search.maven.org/"},"search")," can take up to two hours.  You can also ",Object(o.b)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=aO-QFRsYxN4"},"watch this youtube video")," to know more about the Nexus staging lifecycle."),Object(o.b)("h3",{id:"release-settings"},"Release settings"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"<settings>\n  ...\n  <profiles>\n    <profile>\n      <id>ossrh</id>\n      <activation>\n        <activeByDefault>true</activeByDefault>\n      </activation>\n      <properties>\n        <gpg.executable>gpg2</gpg.executable>\n      </properties>\n    </profile>\n  </profiles>\n</settings>\n")),Object(o.b)("h3",{id:"known-issues"},"Known issues"),Object(o.b)("p",null,'If the release command fails with "gpg: signing failed: Inappropriate ioctl for device", run the following command and try again; ',Object(o.b)("a",{parentName:"p",href:"https://unix.stackexchange.com/a/257065"},"more info on stackexchange"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"export GPG_TTY=$(tty)\n")),Object(o.b)("h2",{id:"project-documentation"},"Project Documentation"),Object(o.b)("p",null,"Maven allows to generate a documentation website in HTML format and provides different options to publish such content on remote servers; content is composed by:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"https://www.oracle.com/technetwork/articles/java/index-137868.html"},"Javadocs")," - can be easily generated using the ",Object(o.b)("a",{parentName:"li",href:"https://maven.apache.org/plugins/maven-javadoc-plugin/"},"maven-javadoc-plugin"),", which is already configured to run during the build by the FINOS Parent Pom; the documentation is delivered in HTML format and included in the target/site/apidocs project sub-folder; to invoke the javadoc generation manually, you can invoke ",Object(o.b)("inlineCode",{parentName:"li"},"mvn javadoc:javadoc"),"."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"https://maven.apache.org/plugins/maven-site-plugin/examples/configuring-reports.html"},"Reporting")," - to collect different metrics from Maven build plugins and publish them as part of the docs."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"https://maven.apache.org/plugins/maven-site-plugin/examples/creating-content.html"},"Free content")," - A free structure of documentation content, which supports different template languages (apt, fml, markdown, xdoc and xhtml)")),Object(o.b)("p",null,"The FINOS Parent POM provides a configuration that allows to publish such content under the ",Object(o.b)("a",{parentName:"p",href:"https://landscape.finos.org"},"FINOS Project Landscape"),"; to enable it, the build must be invoked using the ",Object(o.b)("inlineCode",{parentName:"p"},"-Ppublish-site")," Maven profile.  For more info, follow the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/finos/finos-parent-pom#github-plugins-configuration"},"related Pom documentation")," and check configuration on the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/symphonyoss/symphony-java-sample-bots"},"symphony-java-sample-bots project"),"."))}p.isMDXComponent=!0}}]);