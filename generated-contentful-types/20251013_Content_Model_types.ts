/**
 * Auto generated with:
 * $ npx cf-content-types-generator \
 *   exports/contentful-export-uxmn6t2ipova-master-2025-10-13T14-51-33.json \
 *   -d -X \
 *   > generated-contentful-types/20251013_Content_Model_types.ts
 */

import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

enum ContentTypesToId {
  allFieldTypes = "allFieldTypes",
  author = "author",
  brand = "brand",
  codeExample = "66BFXuVXuCG2cs9HZYt0En",
  faq = "1pu5b7wObafI86CPfLWNKO",
  learningPath = "learningPath",
  pageAuthorPage = "pageAuthorPage",
  pathTutorialsCatalog = "pathTutorialsCatalog",
  quizAssessment = "4DQAxLvUT5oUUkfgj7UnFW",
  quizQuestion = "3yGNtFfTZVIJEMOtELQLmz",
  skill = "skill",
  tutorial = "tutorial",
  callToActionButton = "callToActionButton",
  landingPage = "landingPage",
}

/**
 * Fields type definition for content type 'TypeFAQ'
 * @name TypeFaqFields
 * @type {TypeFaqFields}
 * @memberof TypeFaq
 */
export interface TypeFaqFields {
  /**
   * Field type definition for field 'question' (Question)
   * @name Question
   * @localized true
   */
  question: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'published' (Published)
   * @name Published
   * @localized false
   */
  published?: EntryFieldTypes.Boolean;
  /**
   * Field type definition for field 'displayOrder' (Display Order)
   * @name Display Order
   * @localized false
   */
  displayOrder?: EntryFieldTypes.Integer;
  /**
   * Field type definition for field 'related' (related)
   * @name related
   * @localized false
   */
  related?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<
      | TypeQuizAssessmentSkeleton
      | TypeLearningPathSkeleton
      | TypeSkillSkeleton
      | TypeTutorialSkeleton
    >
  >;
  /**
   * Field type definition for field 'helpfulnessScore' (Helpfulness score)
   * @name Helpfulness score
   * @localized false
   */
  helpfulnessScore?: EntryFieldTypes.Number;
  /**
   * Field type definition for field 'answer' (Answer)
   * @name Answer
   * @localized false
   */
  answer?: EntryFieldTypes.RichText;
}

/**
 * Entry skeleton type definition for content type 'FAQ' (FAQ)
 * @name TypeFAQSkeleton
 * @type {TypeFAQSkeleton}
 * @author 6jMs45X3FOOFZ1x4Kjzcu5
 * @since 2025-09-30T17:14:03.794Z
 * @version 21
 */
export type TypeFAQSkeleton = EntrySkeletonType<
  TypeFaqFields,
  ContentTypesToId.faq
>;
/**
 * Entry type definition for content type 'FAQ' (FAQ)
 * @name TypeFAQ
 * @type {TypeFAQ}
 * @author 6jMs45X3FOOFZ1x4Kjzcu5
 * @since 2025-09-30T17:14:03.794Z
 * @version 21
 */
export type TypeFAQ<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeFAQSkeleton, Modifiers, Locales>;

/**
 * Fields type definition for content type 'TypeQuizQuestion' // Quiz Question
 * @name TypeQuizQuestionFields
 * @type {TypeQuizQuestionFields}
 * @memberof TypeQuizQuestion
 */
export interface TypeQuizQuestionFields {
  /**
   * Field type definition for field 'questionText' (Question Text)
   * @name Question Text
   * @localized true
   */
  questionText: EntryFieldTypes.RichText;
  /**
   * Field type definition for field 'questionType' (Question Type)
   * @name Question Type
   * @localized false
   */
  questionType: EntryFieldTypes.Symbol<
    | "code-completion"
    | "fill-in-blank"
    | "matching"
    | "multiple-choice"
    | "short-answer"
    | "true-false"
  >;
  /**
   * Field type definition for field 'difficulty' (Difficulty)
   * @name Difficulty
   * @localized false
   */
  difficulty: EntryFieldTypes.Symbol<"Advanced" | "Beginner" | "Intermediate">;
  /**
   * Field type definition for field 'correctAnswers' (Correct Answers)
   * @name Correct Answers
   * @localized false
   */
  correctAnswers: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  /**
   * Field type definition for field 'answerOptions' (Answer Options)
   * @name Answer Options
   * @localized false
   */
  answerOptions?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  /**
   * Field type definition for field 'explanation' (Explanation)
   * @name Explanation
   * @localized true
   */
  explanation?: EntryFieldTypes.RichText;
  /**
   * Field type definition for field 'codeSnippet' (Code Snippet)
   * @name Code Snippet
   * @localized false
   */
  codeSnippet?: EntryFieldTypes.Text;
  /**
   * Field type definition for field 'expectedOutput' (Expected Output)
   * @name Expected Output
   * @localized false
   */
  expectedOutput?: EntryFieldTypes.Text;
  /**
   * Field type definition for field 'category' (Category)
   * @name Category
   * @localized false
   */
  category: EntryFieldTypes.Symbol<
    | "Algorithms"
    | "Backend"
    | "Database"
    | "DevOps"
    | "Frontend"
    | "General Programming"
    | "Mobile"
    | "System Design"
  >;
  /**
   * Field type definition for field 'relatedTopics' (Related Topics)
   * @name Related Topics
   * @localized false
   */
  relatedTopics?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeSkillSkeleton>
  >;
  /**
   * Field type definition for field 'name' (name)
   * @name name
   * @localized false
   */
  name: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'QuizQuestion' (Quiz Question)
 * @name TypeQuizQuestionSkeleton
 * @type {TypeQuizQuestionSkeleton}
 * @author 6jMs45X3FOOFZ1x4Kjzcu5
 * @since 2025-09-30T17:17:10.773Z
 * @version 13
 */
export type TypeQuizQuestionSkeleton = EntrySkeletonType<
  TypeQuizQuestionFields,
  ContentTypesToId.quizQuestion
>;
/**
 * Entry type definition for content type 'QuizQuestion' (Quiz Question)
 * @name TypeQuizQuestion
 * @type {TypeQuizQuestion}
 * @author 6jMs45X3FOOFZ1x4Kjzcu5
 * @since 2025-09-30T17:17:10.773Z
 * @version 13
 */
export type TypeQuizQuestion<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeQuizQuestionSkeleton, Modifiers, Locales>;

/**
 * Fields type definition for content type 'TypeQuizAssessment'
 * @name TypeQuizAssessmentFields
 * @type {TypeQuizAssessmentFields}
 * @memberof TypeQuizAssessment
 */
export interface TypeQuizAssessmentFields {
  /**
   * Field type definition for field 'title' (Title)
   * @name Title
   * @localized true
   */
  title: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'description' (Description)
   * @name Description
   * @localized true
   */
  description?: EntryFieldTypes.Text;
  /**
   * Field type definition for field 'questions' (Questions)
   * @name Questions
   * @localized false
   */
  questions: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeQuizQuestionSkeleton>
  >;
  /**
   * Field type definition for field 'passingScore' (Passing Score (%))
   * @name Passing Score (%)
   * @localized false
   */
  passingScore: EntryFieldTypes.Integer;
  /**
   * Field type definition for field 'relatedTutorial' (Related Tutorial)
   * @name Related Tutorial
   * @localized false
   */
  relatedTutorial?: EntryFieldTypes.EntryLink<TypeTutorialSkeleton>;
  /**
   * Field type definition for field 'difficulty' (Difficulty)
   * @name Difficulty
   * @localized false
   */
  difficulty: EntryFieldTypes.Symbol<"Advanced" | "Beginner" | "Intermediate">;
}

/**
 * Entry skeleton type definition for content type 'QuizAssessment' (Quiz/Assessment)
 * @name TypeQuizAssessmentSkeleton
 * @type {TypeQuizAssessmentSkeleton}
 * @author 6jMs45X3FOOFZ1x4Kjzcu5
 * @since 2025-09-30T17:12:59.055Z
 * @version 11
 */
export type TypeQuizAssessmentSkeleton = EntrySkeletonType<
  TypeQuizAssessmentFields,
  ContentTypesToId.quizAssessment
>;
/**
 * Entry type definition for content type 'QuizAssessment' (Quiz/Assessment)
 * @name TypeQuizAssessment
 * @type {TypeQuizAssessment}
 * @author 6jMs45X3FOOFZ1x4Kjzcu5
 * @since 2025-09-30T17:12:59.055Z
 * @version 11
 */
export type TypeQuizAssessment<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeQuizAssessmentSkeleton, Modifiers, Locales>;

/**
 * Fields type definition for content type 'TypeCodeExample'
 * @name TypeCodeExampleFields
 * @type {TypeCodeExampleFields}
 * @memberof TypeCodeExample
 */
export interface TypeCodeExampleFields {
  /**
   * Field type definition for field 'title' (Title)
   * @name Title
   * @localized true
   */
  title: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'description' (Description)
   * @name Description
   * @localized true
   */
  description?: EntryFieldTypes.Text;
  /**
   * Field type definition for field 'code' (Code)
   * @name Code
   * @localized false
   */
  code: EntryFieldTypes.Text;
  /**
   * Field type definition for field 'language' (Programming Language)
   * @name Programming Language
   * @localized false
   */
  language: EntryFieldTypes.Symbol<
    | "Bash"
    | "C#"
    | "CSS"
    | "Go"
    | "HTML"
    | "Java"
    | "JavaScript"
    | "Kotlin"
    | "Other"
    | "PHP"
    | "Python"
    | "Ruby"
    | "Rust"
    | "SQL"
    | "Swift"
    | "TypeScript"
  >;
  /**
   * Field type definition for field 'tags' (Tags)
   * @name Tags
   * @localized false
   */
  tags?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  /**
   * Field type definition for field 'difficulty' (Difficulty)
   * @name Difficulty
   * @localized false
   */
  difficulty: EntryFieldTypes.Symbol<"Advanced" | "Beginner" | "Intermediate">;
  /**
   * Field type definition for field 'relatedTutorials' (Related Tutorials)
   * @name Related Tutorials
   * @localized false
   */
  relatedTutorials?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeTutorialSkeleton>
  >;
  /**
   * Field type definition for field 'githubUrl' (GitHub URL)
   * @name GitHub URL
   * @localized false
   */
  githubUrl?: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'liveDemo' (Live Demo URL)
   * @name Live Demo URL
   * @localized false
   */
  liveDemo?: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'featured' (Featured)
   * @name Featured
   * @localized false
   */
  featured?: EntryFieldTypes.Boolean;
  /**
   * Field type definition for field 'displayOrder' (Display Order)
   * @name Display Order
   * @localized false
   */
  displayOrder?: EntryFieldTypes.Integer;
  /**
   * Field type definition for field 'showLineNumbers' (Show Line Numbers)
   * @name Show Line Numbers
   * @localized false
   */
  showLineNumbers?: EntryFieldTypes.Boolean;
  /**
   * Field type definition for field 'syntaxHighlighting' (Enable Syntax Highlighting)
   * @name Enable Syntax Highlighting
   * @localized false
   */
  syntaxHighlighting?: EntryFieldTypes.Boolean;
}

/**
 * Entry skeleton type definition for content type 'CodeExample' (Code Example)
 * @name TypeCodeExampleSkeleton
 * @type {TypeCodeExampleSkeleton}
 * @author 6jMs45X3FOOFZ1x4Kjzcu5
 * @since 2025-09-30T17:13:56.552Z
 * @version 1
 */
export type TypeCodeExampleSkeleton = EntrySkeletonType<
  TypeCodeExampleFields,
  ContentTypesToId.codeExample
>;
/**
 * Entry type definition for content type 'CodeExample' (Code Example)
 * @name TypeCodeExample
 * @type {TypeCodeExample}
 * @author 6jMs45X3FOOFZ1x4Kjzcu5
 * @since 2025-09-30T17:13:56.552Z
 * @version 1
 */
export type TypeCodeExample<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeCodeExampleSkeleton, Modifiers, Locales>;

/**
 * Fields type definition for content type 'TypeAllFieldTypes'
 * @name TypeAllFieldTypesFields
 * @type {TypeAllFieldTypesFields}
 * @memberof TypeAllFieldTypes
 */
export interface TypeAllFieldTypesFields {
  /**
   * Field type definition for field 'richText' (rich text)
   * @name rich text
   * @localized true
   */
  richText?: EntryFieldTypes.RichText;
  /**
   * Field type definition for field 'shortText' (short text)
   * @name short text
   * @localized true
   */
  shortText: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'longText' (long text)
   * @name long text
   * @localized false
   */
  longText?: EntryFieldTypes.Text;
  /**
   * Field type definition for field 'shortTextList' (short text list)
   * @name short text list
   * @localized false
   */
  shortTextList?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  /**
   * Field type definition for field 'integer' (integer)
   * @name integer
   * @localized false
   */
  integer?: EntryFieldTypes.Integer;
  /**
   * Field type definition for field 'decimal' (decimal)
   * @name decimal
   * @localized false
   */
  decimal?: EntryFieldTypes.Number;
  /**
   * Field type definition for field 'datetime' (datetime)
   * @name datetime
   * @localized false
   */
  datetime?: EntryFieldTypes.Date;
  /**
   * Field type definition for field 'location' (location)
   * @name location
   * @localized false
   */
  location?: EntryFieldTypes.Location;
  /**
   * Field type definition for field 'singleMediaFile' (single media file)
   * @name single media file
   * @localized false
   */
  singleMediaFile?: EntryFieldTypes.AssetLink;
  /**
   * Field type definition for field 'listOfMediaFiles' (list of media files)
   * @name list of media files
   * @localized false
   */
  listOfMediaFiles?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
  /**
   * Field type definition for field 'bool' (bool)
   * @name bool
   * @localized false
   */
  bool?: EntryFieldTypes.Boolean;
  /**
   * Field type definition for field 'json' (json)
   * @name json
   * @localized false
   */
  json?: EntryFieldTypes.Object;
  /**
   * Field type definition for field 'singleRef' (singleRef)
   * @name singleRef
   * @localized false
   */
  singleRef?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
  /**
   * Field type definition for field 'listOfRefs' (list of Refs)
   * @name list of Refs
   * @localized false
   */
  listOfRefs?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
  /**
   * Field type definition for field 'manyReferences' (many References)
   * @name many References
   * @localized false
   */
  manyReferences?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<EntrySkeletonType>
  >;
}

/**
 * Entry skeleton type definition for content type 'allFieldTypes' (all field types)
 * @name TypeAllFieldTypesSkeleton
 * @type {TypeAllFieldTypesSkeleton}
 * @author 6jMs45X3FOOFZ1x4Kjzcu5
 * @since 2025-09-12T20:03:32.495Z
 * @version 5
 */
export type TypeAllFieldTypesSkeleton = EntrySkeletonType<
  TypeAllFieldTypesFields,
  ContentTypesToId.allFieldTypes
>;
/**
 * Entry type definition for content type 'allFieldTypes' (all field types)
 * @name TypeAllFieldTypes
 * @type {TypeAllFieldTypes}
 * @author 6jMs45X3FOOFZ1x4Kjzcu5
 * @since 2025-09-12T20:03:32.495Z
 * @version 5
 */
export type TypeAllFieldTypes<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeAllFieldTypesSkeleton, Modifiers, Locales>;

/**
 * Fields type definition for content type 'TypeAuthor'
 * @name TypeAuthorFields
 * @type {TypeAuthorFields}
 * @memberof TypeAuthor
 */
export interface TypeAuthorFields {
  /**
   * Field type definition for field 'name' (name)
   * @name name
   * @localized false
   */
  name: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'skills' (skills)
   * @name skills
   * @localized false
   */
  skills: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeSkillSkeleton>>;
  /**
   * Field type definition for field 'bio' (bio)
   * @name bio
   * @localized true
   */
  bio: EntryFieldTypes.RichText;
  /**
   * Field type definition for field 'age' (age)
   * @name age
   * @localized false
   */
  age: EntryFieldTypes.Integer;
  /**
   * Field type definition for field 'picture' (picture)
   * @name picture
   * @localized false
   */
  picture?: EntryFieldTypes.AssetLink;
}

/**
 * Entry skeleton type definition for content type 'author' (Author)
 * @name TypeAuthorSkeleton
 * @type {TypeAuthorSkeleton}
 * @author 6jMs45X3FOOFZ1x4Kjzcu5
 * @since 2025-04-14T22:20:37.323Z
 * @version 23
 */
export type TypeAuthorSkeleton = EntrySkeletonType<
  TypeAuthorFields,
  ContentTypesToId.author
>;
/**
 * Entry type definition for content type 'author' (Author)
 * @name TypeAuthor
 * @type {TypeAuthor}
 * @author 6jMs45X3FOOFZ1x4Kjzcu5
 * @since 2025-04-14T22:20:37.323Z
 * @version 23
 */
export type TypeAuthor<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeAuthorSkeleton, Modifiers, Locales>;

/**
 * Fields type definition for content type 'TypeBrand'
 * @name TypeBrandFields
 * @type {TypeBrandFields}
 * @memberof TypeBrand
 */
export interface TypeBrandFields {
  /**
   * Field type definition for field 'name' (Name)
   * @name Name
   * @localized false
   */
  name: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'domain' (Domain)
   * @name Domain
   * @localized false
   */
  domain: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'srPathDomain' (SR Path Domain)
   * @name SR Path Domain
   * @localized false
   */
  srPathDomain?: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'theme' (Theme)
   * @name Theme
   * @localized false
   */
  theme: EntryFieldTypes.Symbol<"ANGI" | "HA" | "INSTAPRO" | "PRO">;
  /**
   * Field type definition for field 'isStaticBaseUrl' (Is Static Base URL)
   * @name Is Static Base URL
   * @localized false
   */
  isStaticBaseUrl?: EntryFieldTypes.Boolean;
  /**
   * Field type definition for field 'loginUrl' (Login URL)
   * @name Login URL
   * @localized false
   */
  loginUrl?: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'logo' (logo)
   * @name logo
   * @localized false
   */
  logo: EntryFieldTypes.AssetLink;
}

/**
 * Entry skeleton type definition for content type 'brand' (Brand)
 * @name TypeBrandSkeleton
 * @type {TypeBrandSkeleton}
 * @author 6jMs45X3FOOFZ1x4Kjzcu5
 * @since 2025-06-20T22:53:51.075Z
 * @version 11
 */
export type TypeBrandSkeleton = EntrySkeletonType<
  TypeBrandFields,
  ContentTypesToId.brand
>;
/**
 * Entry type definition for content type 'brand' (Brand)
 * @name TypeBrand
 * @type {TypeBrand}
 * @author 6jMs45X3FOOFZ1x4Kjzcu5
 * @since 2025-06-20T22:53:51.075Z
 * @version 11
 */
export type TypeBrand<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeBrandSkeleton, Modifiers, Locales>;

/**
 * Fields type definition for content type 'TypeCallToActionButton'
 * @name TypeCallToActionButtonFields
 * @type {TypeCallToActionButtonFields}
 * @memberof TypeCallToActionButton
 */
export interface TypeCallToActionButtonFields {
  /**
   * Field type definition for field 'text' (text)
   * @name text
   * @localized true
   */
  text: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'url' (URL)
   * @name URL
   * @localized true
   */
  url?: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'callToActionButton' ([UI] Call to Action Button)
 * @name TypeCallToActionButtonSkeleton
 * @type {TypeCallToActionButtonSkeleton}
 * @author 6jMs45X3FOOFZ1x4Kjzcu5
 * @since 2025-04-14T22:20:39.092Z
 * @version 5
 */
export type TypeCallToActionButtonSkeleton = EntrySkeletonType<
  TypeCallToActionButtonFields,
  ContentTypesToId.callToActionButton
>;
/**
 * Entry type definition for content type 'callToActionButton' ([UI] Call to Action Button)
 * @name TypeCallToActionButton
 * @type {TypeCallToActionButton}
 * @author 6jMs45X3FOOFZ1x4Kjzcu5
 * @since 2025-04-14T22:20:39.092Z
 * @version 5
 */
export type TypeCallToActionButton<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeCallToActionButtonSkeleton, Modifiers, Locales>;

/**
 * Fields type definition for content type 'TypeLandingPage'
 * @name TypeLandingPageFields
 * @type {TypeLandingPageFields}
 * @memberof TypeLandingPage
 */
export interface TypeLandingPageFields {
  /**
   * Field type definition for field 'mainHeading' (Main Heading)
   * @name Main Heading
   * @localized true
   */
  mainHeading: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'subHeading' (Sub Heading)
   * @name Sub Heading
   * @localized true
   */
  subHeading?: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'backgroundImage' (Background Image)
   * @name Background Image
   * @localized true
   */
  backgroundImage: EntryFieldTypes.AssetLink;
  /**
   * Field type definition for field 'carouselImages' (Carousel Images)
   * @name Carousel Images
   * @localized true
   */
  carouselImages: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
  /**
   * Field type definition for field 'callToActionButton' (call to action button)
   * @name call to action button
   * @localized true
   */
  callToActionButton?: EntryFieldTypes.EntryLink<TypeCallToActionButtonSkeleton>;
}

/**
 * Entry skeleton type definition for content type 'landingPage' ([UI] LandingPage)
 * @name TypeLandingPageSkeleton
 * @type {TypeLandingPageSkeleton}
 * @author 6jMs45X3FOOFZ1x4Kjzcu5
 * @since 2025-04-14T22:20:38.656Z
 * @version 5
 */
export type TypeLandingPageSkeleton = EntrySkeletonType<
  TypeLandingPageFields,
  ContentTypesToId.landingPage
>;
/**
 * Entry type definition for content type 'landingPage' ([UI] LandingPage)
 * @name TypeLandingPage
 * @type {TypeLandingPage}
 * @author 6jMs45X3FOOFZ1x4Kjzcu5
 * @since 2025-04-14T22:20:38.656Z
 * @version 5
 */
export type TypeLandingPage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeLandingPageSkeleton, Modifiers, Locales>;

/**
 * Fields type definition for content type 'TypeLearningPath'
 * @name TypeLearningPathFields
 * @type {TypeLearningPathFields}
 * @memberof TypeLearningPath
 */
export interface TypeLearningPathFields {
  /**
   * Field type definition for field 'title' (Title)
   * @name Title
   * @localized true
   */
  title: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'description' (Description)
   * @name Description
   * @localized true
   */
  description: EntryFieldTypes.RichText;
  /**
   * Field type definition for field 'image' (image)
   * @name image
   * @localized false
   */
  image: EntryFieldTypes.AssetLink;
  /**
   * Field type definition for field 'subtitle' (subtitle)
   * @name subtitle
   * @localized false
   */
  subtitle?: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'tutorials' (tutorials)
   * @name tutorials
   * @localized false
   */
  tutorials: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeTutorialSkeleton>
  >;
  /**
   * Field type definition for field 'authors' (authors)
   * @name authors
   * @localized false
   */
  authors: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeAuthorSkeleton>>;
  /**
   * Field type definition for field 'skills' (skills)
   * @name skills
   * @localized false
   */
  skills: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeSkillSkeleton>>;
}

/**
 * Entry skeleton type definition for content type 'learningPath' (Learning Path)
 * @name TypeLearningPathSkeleton
 * @type {TypeLearningPathSkeleton}
 * @author 6jMs45X3FOOFZ1x4Kjzcu5
 * @since 2025-04-14T22:20:39.576Z
 * @version 7
 */
export type TypeLearningPathSkeleton = EntrySkeletonType<
  TypeLearningPathFields,
  ContentTypesToId.learningPath
>;
/**
 * Entry type definition for content type 'learningPath' (Learning Path)
 * @name TypeLearningPath
 * @type {TypeLearningPath}
 * @author 6jMs45X3FOOFZ1x4Kjzcu5
 * @since 2025-04-14T22:20:39.576Z
 * @version 7
 */
export type TypeLearningPath<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeLearningPathSkeleton, Modifiers, Locales>;

/**
 * Fields type definition for content type 'TypePageAuthorPage'
 * @name TypePageAuthorPageFields
 * @type {TypePageAuthorPageFields}
 * @memberof TypePageAuthorPage
 */
export interface TypePageAuthorPageFields {
  /**
   * Field type definition for field 'author' (author)
   * @name author
   * @localized false
   */
  author: EntryFieldTypes.EntryLink<TypeAuthorSkeleton>;
}

/**
 * Entry skeleton type definition for content type 'pageAuthorPage' ([Page] Author Page)
 * @name TypePageAuthorPageSkeleton
 * @type {TypePageAuthorPageSkeleton}
 * @author 6jMs45X3FOOFZ1x4Kjzcu5
 * @since 2025-04-14T22:20:40.421Z
 * @version 5
 */
export type TypePageAuthorPageSkeleton = EntrySkeletonType<
  TypePageAuthorPageFields,
  ContentTypesToId.pageAuthorPage
>;
/**
 * Entry type definition for content type 'pageAuthorPage' ([Page] Author Page)
 * @name TypePageAuthorPage
 * @type {TypePageAuthorPage}
 * @author 6jMs45X3FOOFZ1x4Kjzcu5
 * @since 2025-04-14T22:20:40.421Z
 * @version 5
 */
export type TypePageAuthorPage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypePageAuthorPageSkeleton, Modifiers, Locales>;

/**
 * Fields type definition for content type 'TypePathTutorialsCatalog'
 * @name TypePathTutorialsCatalogFields
 * @type {TypePathTutorialsCatalogFields}
 * @memberof TypePathTutorialsCatalog
 */
export interface TypePathTutorialsCatalogFields {
  /**
   * Field type definition for field 'title' (title)
   * @name title
   * @localized true
   */
  title: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'description' (Description)
   * @name Description
   * @localized true
   */
  description: EntryFieldTypes.RichText;
  /**
   * Field type definition for field 'tutorials' (tutorials)
   * @name tutorials
   * @localized false
   */
  tutorials: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeTutorialSkeleton>
  >;
}

/**
 * Entry skeleton type definition for content type 'pathTutorialsCatalog' ([Page] Tutorials Catalog)
 * @name TypePathTutorialsCatalogSkeleton
 * @type {TypePathTutorialsCatalogSkeleton}
 * @author 6jMs45X3FOOFZ1x4Kjzcu5
 * @since 2025-04-14T22:20:39.989Z
 * @version 5
 */
export type TypePathTutorialsCatalogSkeleton = EntrySkeletonType<
  TypePathTutorialsCatalogFields,
  ContentTypesToId.pathTutorialsCatalog
>;
/**
 * Entry type definition for content type 'pathTutorialsCatalog' ([Page] Tutorials Catalog)
 * @name TypePathTutorialsCatalog
 * @type {TypePathTutorialsCatalog}
 * @author 6jMs45X3FOOFZ1x4Kjzcu5
 * @since 2025-04-14T22:20:39.989Z
 * @version 5
 */
export type TypePathTutorialsCatalog<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypePathTutorialsCatalogSkeleton, Modifiers, Locales>;

/**
 * Fields type definition for content type 'TypeSkill'
 * @name TypeSkillFields
 * @type {TypeSkillFields}
 * @memberof TypeSkill
 */
export interface TypeSkillFields {
  /**
   * Field type definition for field 'skill' (skill)
   * @name skill
   * @localized false
   */
  skill: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'skill' (Skill)
 * @name TypeSkillSkeleton
 * @type {TypeSkillSkeleton}
 * @author 6jMs45X3FOOFZ1x4Kjzcu5
 * @since 2025-04-14T22:20:37.700Z
 * @version 5
 */
export type TypeSkillSkeleton = EntrySkeletonType<
  TypeSkillFields,
  ContentTypesToId.skill
>;
/**
 * Entry type definition for content type 'skill' (Skill)
 * @name TypeSkill
 * @type {TypeSkill}
 * @author 6jMs45X3FOOFZ1x4Kjzcu5
 * @since 2025-04-14T22:20:37.700Z
 * @version 5
 */
export type TypeSkill<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeSkillSkeleton, Modifiers, Locales>;

/**
 * Fields type definition for content type 'TypeTutorial'
 * @name TypeTutorialFields
 * @type {TypeTutorialFields}
 * @memberof TypeTutorial
 */
export interface TypeTutorialFields {
  /**
   * Field type definition for field 'authors' (authors)
   * @name authors
   * @localized false
   */
  authors: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeAuthorSkeleton>>;
  /**
   * Field type definition for field 'skills' (skills)
   * @name skills
   * @localized false
   */
  skills: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeSkillSkeleton>>;
  /**
   * Field type definition for field 'relatedTutorials' (relatedTutorials)
   * @name relatedTutorials
   * @localized false
   */
  relatedTutorials?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeTutorialSkeleton>
  >;
  /**
   * Field type definition for field 'body' (body)
   * @name body
   * @localized true
   */
  body: EntryFieldTypes.RichText;
  /**
   * Field type definition for field 'bannerImage' (bannerImage)
   * @name bannerImage
   * @localized false
   */
  bannerImage: EntryFieldTypes.AssetLink;
  /**
   * Field type definition for field 'title' (title)
   * @name title
   * @localized true
   */
  title: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'quizzes' (quizzes)
   * @name quizzes
   * @localized false
   */
  quizzes?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeQuizAssessmentSkeleton>
  >;
  /**
   * Field type definition for field 'slug' (slug)
   * @name slug
   * @localized true
   */
  slug: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'tutorial' (Tutorial)
 * @name TypeTutorialSkeleton
 * @type {TypeTutorialSkeleton}
 * @author 6jMs45X3FOOFZ1x4Kjzcu5
 * @since 2025-04-14T22:20:38.099Z
 * @version 17
 */
export type TypeTutorialSkeleton = EntrySkeletonType<
  TypeTutorialFields,
  ContentTypesToId.tutorial
>;
/**
 * Entry type definition for content type 'tutorial' (Tutorial)
 * @name TypeTutorial
 * @type {TypeTutorial}
 * @author 6jMs45X3FOOFZ1x4Kjzcu5
 * @since 2025-04-14T22:20:38.099Z
 * @version 17
 */
export type TypeTutorial<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeTutorialSkeleton, Modifiers, Locales>;
