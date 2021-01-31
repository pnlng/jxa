
export namespace Mail {
    // Default Application
 export interface Application {}
    // Class
 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * Rich (styled) text
  */
 export interface RichText {
   /**
    * The color of the first character.
    */
   color(): any;
   /**
    * The name of the font of the first character.
    */
   font(): string;
   /**
    * The size in points of the first character.
    */
   size(): number;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * Represents an inline text attachment. This class is used mainly for make commands.
  */
 export interface Attachment {
   /**
    * The file for the attachment
    */
   fileName(): any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * This subdivides the text into paragraphs.
  */
 export interface Paragraph {
   /**
    * The color of the first character.
    */
   color(): any;
   /**
    * The name of the font of the first character.
    */
   font(): string;
   /**
    * The size in points of the first character.
    */
   size(): number;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * This subdivides the text into words.
  */
 export interface Word {
   /**
    * The color of the first character.
    */
   color(): any;
   /**
    * The name of the font of the first character.
    */
   font(): string;
   /**
    * The size in points of the first character.
    */
   size(): number;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * This subdivides the text into characters.
  */
 export interface Character {
   /**
    * The color of the character.
    */
   color(): any;
   /**
    * The name of the font of the character.
    */
   font(): string;
   /**
    * The size in points of the character.
    */
   size(): number;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * This subdivides the text into chunks that all have the same attributes.
  */
 export interface AttributeRun {
   /**
    * The color of the first character.
    */
   color(): any;
   /**
    * The name of the font of the first character.
    */
   font(): string;
   /**
    * The size in points of the first character.
    */
   size(): number;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A new email message
  */
 export interface OutgoingMessage {
   /**
    * The sender of the message
    */
   sender(): string;
   /**
    * The subject of the message
    */
   subject(): string;
   /**
    * Controls whether the message window is shown on the screen. The default is false
    */
   visible(): boolean;
   /**
    * The signature of the message
    */
   messageSignature(): any;
   /**
    * The unique identifier of the message
    */
   id(): number;
   /**
    * Does nothing at all (deprecated)
    */
   htmlContent(): string;
   /**
    * Does nothing at all (deprecated)
    */
   vcardPath(): any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * DEPRECATED - DO NOT USE
  */
 export interface LdapServer {
   /**
    * Does nothing at all (deprecated)
    */
   enabled(): boolean;
   /**
    * Does nothing at all (deprecated)
    */
   name(): string;
   /**
    * Does nothing at all (deprecated)
    */
   port(): number;
   /**
    * Does nothing at all (deprecated)
    */
   scope(): any;
   /**
    * Does nothing at all (deprecated)
    */
   searchBase(): string;
   /**
    * Does nothing at all (deprecated)
    */
   hostName(): string;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * DEPRECATED - DO NOT USE
  */
 export interface OLDMessageEditor {
   /**
    * DEPRECATED - DO NOT USE
    */
   OLDComposeMessage(): any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * Represents the object responsible for managing a viewer window
  */
 export interface MessageViewer {
   /**
    * The top level Drafts mailbox
    */
   draftsMailbox(): any;
   /**
    * The top level In mailbox
    */
   inbox(): any;
   /**
    * The top level Junk mailbox
    */
   junkMailbox(): any;
   /**
    * The top level Out mailbox
    */
   outbox(): any;
   /**
    * The top level Sent mailbox
    */
   sentMailbox(): any;
   /**
    * The top level Trash mailbox
    */
   trashMailbox(): any;
   /**
    * The column that is currently sorted in the viewer
    */
   sortColumn(): any;
   /**
    * Whether the viewer is sorted ascending or not
    */
   sortedAscending(): boolean;
   /**
    * Controls whether the list of mailboxes is visible or not
    */
   mailboxListVisible(): boolean;
   /**
    * Controls whether the preview pane of the message viewer window is visible or not
    */
   previewPaneIsVisible(): boolean;
   /**
    * List of columns that are visible. The subject column and the message status column will always be visible
    */
   visibleColumns(): any;
   /**
    * The unique identifier of the message viewer
    */
   id(): number;
   /**
    * List of messages currently being displayed in the viewer
    */
   visibleMessages(): any;
   /**
    * List of messages currently selected
    */
   selectedMessages(): any;
   /**
    * List of mailboxes currently selected in the list of mailboxes
    */
   selectedMailboxes(): any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * Email signatures
  */
 export interface Signature {
   /**
    * Contents of email signature. If there is a version with fonts and/or styles, that will be returned over the plain text version
    */
   content(): string;
   /**
    * Name of the signature
    */
   name(): string;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * An email message
  */
 export interface Message {
   /**
    * The unique identifier of the message.
    */
   id(): number;
   /**
    * All the headers of the message
    */
   allHeaders(): string;
   /**
    * The background color of the message
    */
   backgroundColor(): any;
   /**
    * The mailbox in which this message is filed
    */
   mailbox(): any;
   /**
    * Contents of an email message
    */
   content(): any;
   /**
    * The date a message was received
    */
   dateReceived(): any;
   /**
    * The date a message was sent
    */
   dateSent(): any;
   /**
    * Indicates whether the message is deleted or not
    */
   deletedStatus(): boolean;
   /**
    * Indicates whether the message is flagged or not
    */
   flaggedStatus(): boolean;
   /**
    * The flag on the message, or -1 if the message is not flagged
    */
   flagIndex(): number;
   /**
    * Indicates whether the message has been marked junk or evaluated to be junk by the junk mail filter.
    */
   junkMailStatus(): boolean;
   /**
    * Indicates whether the message is read or not
    */
   readStatus(): boolean;
   /**
    * The unique message ID string
    */
   messageId(): string;
   /**
    * Raw source of the message
    */
   source(): string;
   /**
    * The address that replies should be sent to
    */
   replyTo(): string;
   /**
    * The size (in bytes) of a message
    */
   messageSize(): number;
   /**
    * The sender of the message
    */
   sender(): string;
   /**
    * The subject of the message
    */
   subject(): string;
   /**
    * Indicates whether the message was forwarded or not
    */
   wasForwarded(): boolean;
   /**
    * Indicates whether the message was redirected or not
    */
   wasRedirected(): boolean;
   /**
    * Indicates whether the message was replied to or not
    */
   wasRepliedTo(): boolean;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A Mail account for receiving messages (POP/IMAP). To create a new receiving account, use the 'pop account', 'imap account', and 'iCloud account' objects
  */
 export interface Account {
   /**
    * The delivery account used when sending mail from this account
    */
   deliveryAccount(): any;
   /**
    * The name of an account
    */
   name(): string;
   /**
    * The unique identifier of the account
    */
   id(): string;
   /**
    * Password for this account. Can be set, but not read via scripting
    */
   password(): string;
   /**
    * Preferred authentication scheme for account
    */
   authentication(): any;
   /**
    * The type of an account
    */
   accountType(): any;
   /**
    * The list of email addresses configured for an account
    */
   emailAddresses(): any;
   /**
    * The users full name configured for an account
    */
   fullName(): string;
   /**
    * Number of days before junk messages are deleted (0 = delete on quit, -1 = never delete)
    */
   emptyJunkMessagesFrequency(): number;
   /**
    * Does nothing at all (deprecated)
    */
   emptySentMessagesFrequency(): number;
   /**
    * Number of days before messages in the trash are permanently deleted (0 = delete on quit, -1 = never delete)
    */
   emptyTrashFrequency(): number;
   /**
    * Indicates whether the messages in the junk messages mailboxes will be deleted on quit
    */
   emptyJunkMessagesOnQuit(): boolean;
   /**
    * Does nothing at all (deprecated)
    */
   emptySentMessagesOnQuit(): boolean;
   /**
    * Indicates whether the messages in deleted messages mailboxes will be permanently deleted on quit
    */
   emptyTrashOnQuit(): boolean;
   /**
    * Indicates whether the account is enabled or not
    */
   enabled(): boolean;
   /**
    * The user name used to connect to an account
    */
   userName(): string;
   /**
    * The directory where the account stores things on disk
    */
   accountDirectory(): any;
   /**
    * The port used to connect to an account
    */
   port(): number;
   /**
    * The host name used to connect to an account
    */
   serverName(): string;
   /**
    * Does nothing at all (deprecated)
    */
   includeWhenGettingNewMail(): boolean;
   /**
    * Indicates whether messages that are deleted will be moved to the trash mailbox
    */
   moveDeletedMessagesToTrash(): boolean;
   /**
    * Indicates whether SSL is enabled for this receiving account
    */
   usesSsl(): boolean;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * An IMAP email account
  */
 export interface ImapAccount {
   /**
    * Indicates whether an IMAP mailbox is automatically compacted when you quit Mail or switch to another mailbox
    */
   compactMailboxesWhenClosing(): boolean;
   /**
    * Message caching setting for this account
    */
   messageCaching(): any;
   /**
    * Indicates whether drafts will be stored on the IMAP server
    */
   storeDraftsOnServer(): boolean;
   /**
    * Indicates whether junk mail will be stored on the IMAP server
    */
   storeJunkMailOnServer(): boolean;
   /**
    * Indicates whether sent messages will be stored on the IMAP server
    */
   storeSentMessagesOnServer(): boolean;
   /**
    * Indicates whether deleted messages will be stored on the IMAP server
    */
   storeDeletedMessagesOnServer(): boolean;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * An iCloud or MobileMe email account
  */
 export interface ICloudAccount {}

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A POP email account
  */
 export interface PopAccount {
   /**
    * If message size (in bytes) is over this amount, Mail will prompt you asking whether you want to download the message (-1 = do not prompt)
    */
   bigMessageWarningSize(): number;
   /**
    * Number of days before messages that have been downloaded will be deleted from the server (0 = delete immediately after downloading)
    */
   delayedMessageDeletionInterval(): number;
   /**
    * Indicates whether POP account deletes messages on the server after downloading
    */
   deleteMailOnServer(): boolean;
   /**
    * Indicates whether messages will be deleted from the server when moved from your POP inbox
    */
   deleteMessagesWhenMovedFromInbox(): boolean;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * An SMTP account (for sending email)
  */
 export interface SmtpServer {
   /**
    * The name of an account
    */
   name(): string;
   /**
    * Password for this account. Can be set, but not read via scripting
    */
   password(): string;
   /**
    * The type of an account
    */
   accountType(): any;
   /**
    * Preferred authentication scheme for account
    */
   authentication(): any;
   /**
    * Indicates whether the account is enabled or not
    */
   enabled(): boolean;
   /**
    * The user name used to connect to an account
    */
   userName(): string;
   /**
    * The port used to connect to an account
    */
   port(): number;
   /**
    * The host name used to connect to an account
    */
   serverName(): string;
   /**
    * Indicates whether SSL is enabled for this receiving account
    */
   usesSsl(): boolean;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A mailbox that holds messages
  */
 export interface Mailbox {
   /**
    * The name of a mailbox
    */
   name(): string;
   /**
    * The number of unread messages in the mailbox
    */
   unreadCount(): number;
   account(): any;
   container(): any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * Class for message rules
  */
 export interface Rule {
   /**
    * If rule matches, apply this color
    */
   colorMessage(): any;
   /**
    * If rule matches, delete message
    */
   deleteMessage(): boolean;
   /**
    * If rule matches, prepend this text to the forwarded message. Set to empty string to include no prepended text
    */
   forwardText(): string;
   /**
    * If rule matches, forward message to this address, or multiple addresses, separated by commas. Set to empty string to disable this action
    */
   forwardMessage(): string;
   /**
    * If rule matches, mark message as flagged
    */
   markFlagged(): boolean;
   /**
    * If rule matches, mark message with the specified flag. Set to -1 to disable this action
    */
   markFlagIndex(): number;
   /**
    * If rule matches, mark message as read
    */
   markRead(): boolean;
   /**
    * If rule matches, play this sound (specify name of sound or path to sound)
    */
   playSound(): string;
   /**
    * If rule matches, redirect message to this address or multiple addresses, separate by commas. Set to empty string to disable this action
    */
   redirectMessage(): string;
   /**
    * If rule matches, reply to message and prepend with this text. Set to empty string to disable this action
    */
   replyText(): string;
   /**
    * If rule matches, run this compiled AppleScript file. Set to empty string to disable this action
    */
   runScript(): any;
   /**
    * Indicates whether all conditions must be met for rule to execute
    */
   allConditionsMustBeMet(): boolean;
   /**
    * If rule matches, copy to this mailbox
    */
   copyMessage(): any;
   /**
    * If rule matches, move to this mailbox
    */
   moveMessage(): any;
   /**
    * Indicates whether the color will be used to highlight the text or background of a message in the message list
    */
   highlightTextUsingColor(): boolean;
   /**
    * Indicates whether the rule is enabled
    */
   enabled(): boolean;
   /**
    * Name of rule
    */
   name(): string;
   /**
    * Indicates whether the rule has a copy action
    */
   shouldCopyMessage(): boolean;
   /**
    * Indicates whether the rule has a move action
    */
   shouldMoveMessage(): boolean;
   /**
    * If rule matches, stop rule evaluation for this message
    */
   stopEvaluatingRules(): boolean;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * Class for conditions that can be attached to a single rule
  */
 export interface RuleCondition {
   /**
    * Rule expression field
    */
   expression(): string;
   /**
    * Rule header key
    */
   header(): string;
   /**
    * Rule qualifier
    */
   qualifier(): any;
   /**
    * Rule type
    */
   ruleType(): any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * An email recipient
  */
 export interface Recipient {
   /**
    * The recipients email address
    */
   address(): string;
   /**
    * The name used for display
    */
   name(): string;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * An email recipient in the Bcc: field
  */
 export interface BccRecipient {}

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * An email recipient in the Cc: field
  */
 export interface CcRecipient {}

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * An email recipient in the To: field
  */
 export interface ToRecipient {}

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A mailbox that contains other mailboxes.
  */
 export interface Container {}

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A header value for a message. E.g. To, Subject, From.
  */
 export interface Header {
   /**
    * Contents of the header
    */
   content(): string;
   /**
    * Name of the header value
    */
   name(): string;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A file attached to a received message.
  */
 export interface MailAttachment {
   /**
    * Name of the attachment
    */
   name(): string;
   /**
    * MIME type of the attachment E.g. text/plain.
    */
   MIMEType(): string;
   /**
    * Approximate size in bytes.
    */
   fileSize(): number;
   /**
    * Indicates whether the attachment has been downloaded.
    */
   downloaded(): boolean;
   /**
    * The unique identifier of the attachment.
    */
   id(): string;
 }
    
    // CLass Extension
 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * Mail's top level scripting object.
  */
 export interface Application {
   /**
    * Indicates whether you will be included in the Bcc: field of messages which you are composing
    */
   alwaysBccMyself(): boolean;
   /**
    * Indicates whether you will be included in the Cc: field of messages which you are composing
    */
   alwaysCcMyself(): boolean;
   /**
    * List of messages that the user has selected
    */
   selection(): any;
   /**
    * The build number of the application
    */
   applicationVersion(): string;
   /**
    * The interval (in minutes) between automatic fetches of new mail, -1 means to use an automatically determined interval
    */
   fetchInterval(): number;
   /**
    * Number of background activities currently running in Mail, according to the Activity window
    */
   backgroundActivityCount(): number;
   /**
    * Indicates whether user can choose a signature directly in a new compose window
    */
   chooseSignatureWhenComposing(): boolean;
   /**
    * Indicates whether quoted text should be colored
    */
   colorQuotedText(): boolean;
   /**
    * Default format for messages being composed or message replies
    */
   defaultMessageFormat(): any;
   /**
    * Indicates whether images and attachments in HTML messages should be downloaded and displayed
    */
   downloadHtmlAttachments(): boolean;
   /**
    * The top level Drafts mailbox
    */
   draftsMailbox(): any;
   /**
    * Indicates whether group addresses will be expanded when entered into the address fields of a new compose message
    */
   expandGroupAddresses(): boolean;
   /**
    * Font for plain text messages, only used if 'use fixed width font' is set to true
    */
   fixedWidthFont(): string;
   /**
    * Font size for plain text messages, only used if 'use fixed width font' is set to true
    */
   fixedWidthFontSize(): any;
   /**
    * Returns the same thing as application version (deprecated)
    */
   frameworkVersion(): string;
   /**
    * This always returns default, and setting it doesn't do anything (deprecated)
    */
   headerDetail(): any;
   /**
    * The top level In mailbox
    */
   inbox(): any;
   /**
    * Indicates whether all of the original message will be quoted or only the text you have selected (if any)
    */
   includeAllOriginalMessageText(): boolean;
   /**
    * Indicates whether the text of the original message will be included in replies
    */
   quoteOriginalMessage(): boolean;
   /**
    * Indicates whether spelling will be checked automatically in messages being composed
    */
   checkSpellingWhileTyping(): boolean;
   /**
    * The top level Junk mailbox
    */
   junkMailbox(): any;
   /**
    * Color for quoted text with one level of indentation
    */
   levelOneQuotingColor(): any;
   /**
    * Color for quoted text with two levels of indentation
    */
   levelTwoQuotingColor(): any;
   /**
    * Color for quoted text with three levels of indentation
    */
   levelThreeQuotingColor(): any;
   /**
    * Font for messages (proportional font)
    */
   messageFont(): string;
   /**
    * Font size for messages (proportional font)
    */
   messageFontSize(): any;
   /**
    * Font for message list
    */
   messageListFont(): string;
   /**
    * Font size for message list
    */
   messageListFontSize(): any;
   /**
    * Name of new mail sound or 'None' if no sound is selected
    */
   newMailSound(): string;
   /**
    * The top level Out mailbox
    */
   outbox(): any;
   /**
    * Indicates whether sounds will be played for various things such as when a messages is sent or if no mail is found when manually checking for new mail or if there is a fetch error
    */
   shouldPlayOtherMailSounds(): boolean;
   /**
    * Indicates whether replies will be in the same text format as the message to which you are replying
    */
   sameReplyFormat(): boolean;
   /**
    * Name of current selected signature (or 'randomly', 'sequentially', or 'none')
    */
   selectedSignature(): string;
   /**
    * The top level Sent mailbox
    */
   sentMailbox(): any;
   /**
    * Indicates whether mail will automatically be fetched at a specific interval
    */
   fetchesAutomatically(): boolean;
   /**
    * Indicates whether messages in conversations should be highlighted in the Mail viewer window when not grouped
    */
   highlightSelectedConversation(): boolean;
   /**
    * The top level Trash mailbox
    */
   trashMailbox(): any;
   /**
    * This always returns true, and setting it doesn't do anything (deprecated)
    */
   useAddressCompletion(): boolean;
   /**
    * Should fixed-width font be used for plain text messages?
    */
   useFixedWidthFont(): boolean;
   /**
    * The user's primary email address
    */
   primaryEmail(): string;
   /**
    * Indicates whether to log socket activity for the specified hosts
    */
   hostsToLogActivityOn(): any;
   /**
    * Indicates whether to log socket activity for the specified ports
    */
   portsToLogActivityOn(): any;
   /**
    * Indicates whether all socket activity will be logged
    */
   logAllSocketActivity(): boolean;
   memoryStatistics(): any;
   /**
    * Ignored - Mail always uses the Keychain to store passwords
    */
   useKeychain(): boolean;
 }
    
    // Records

    // Function options

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface DuplicateOptionalParameter {
      /**
       * The location for the new copy or copies.
       */
      to?: any;
      /**
       * Properties to set in the new copy or copies right away.
       */
      withProperties?: any;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface MoveOptionalParameter {
      /**
       * The new location for the object(s).
       */
      to: any;
    }


    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface CheckForNewMailOptionalParameter {
      /**
       * Specify the account that you wish to check for mail
       */
      for?: any;
    }



    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface ForwardOptionalParameter {
      /**
       * Whether the window for the forwarded message is shown. Default is to not show the window.
       */
      openingWindow?: boolean;
    }


    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface ImportMailMailboxOptionalParameter {
      /**
       * the mailbox or folder of mailboxes to import
       */
      at: any;
    }


    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface PerformMailActionWithMessagesOptionalParameter {
      /**
       * If the script is being executed by the user selecting an item in the scripts menu, this argument will specify the mailboxes that are currently selected. Otherwise it will not be specified.
       */
      inMailboxes?: any;
      /**
       * If the script is being executed by a rule action, this argument will be the rule being invoked. Otherwise it will not be specified.
       */
      forRule?: any;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface RedirectOptionalParameter {
      /**
       * Whether the window for the redirected message is shown. Default is to not show the window.
       */
      openingWindow?: boolean;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface ReplyOptionalParameter {
      /**
       * Whether the window for the reply message is shown. Default is to not show the window.
       */
      openingWindow?: boolean;
      /**
       * Whether to reply to all recipients. Default is to reply to the sender only.
       */
      replyToAll?: boolean;
    }


    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface SynchronizeOptionalParameter {
      /**
       * The account to synchronize
       */
      with: any;
    }

}
export interface Mail extends Mail.Application {
    // Functions

     /**
      * Delete an object.
      * @param directParameter The object(s) to delete.
      * 
      */
     delete(directParameter: any, ): void;

     /**
      * Copy an object.
      * @param directParameter The object(s) to copy.
      * @param option
      * 
      */
     duplicate(directParameter: any, option?: Mail.DuplicateOptionalParameter): void;

     /**
      * Move an object to a new location.
      * @param directParameter The object(s) to move.
      * @param option
      * 
      */
     move(directParameter: any, option?: Mail.MoveOptionalParameter): void;

     /**
      * Does nothing at all (deprecated)
      * @param directParameter the message to bounce
      * 
      */
     bounce(directParameter: Mail.Message, ): void;

     /**
      * Triggers a check for email.

      * @param option
      * 
      */
     checkForNewMail(option?: Mail.CheckForNewMailOptionalParameter): void;

     /**
      * Command to get the full name out of a fully specified email address. E.g. Calling this with "John Doe <jdoe@example.com>" as the direct object would return "John Doe"
      * @param directParameter fully formatted email address
      * @return the full name
      */
     extractNameFrom(directParameter: string, ): string;

     /**
      * Command to get just the email address of a fully specified email address. E.g. Calling this with "John Doe <jdoe@example.com>" as the direct object would return "jdoe@example.com"
      * @param directParameter fully formatted email address
      * @return the email address
      */
     extractAddressFrom(directParameter: string, ): string;

     /**
      * Creates a forwarded message.
      * @param directParameter the message to forward
      * @param option
      * @return the message to be forwarded
      */
     forward(directParameter: Mail.Message, option?: Mail.ForwardOptionalParameter): Mail.OutgoingMessage;

     /**
      * Opens a mailto URL.
      * @param directParameter the mailto URL
      * 
      */
     getURL(directParameter: string, ): void;

     /**
      * Imports a mailbox created by Mail.

      * @param option
      * 
      */
     importMailMailbox(option?: Mail.ImportMailMailboxOptionalParameter): void;

     /**
      * Opens a mailto URL.
      * @param directParameter the mailto URL
      * 
      */
     mailto(directParameter: string, ): void;

     /**
      * Script handler invoked by rules and menus that execute AppleScripts. The direct parameter of this handler is a list of messages being acted upon.
      * @param directParameter the message being acted upon
      * @param option
      * 
      */
     performMailActionWithMessages(directParameter: {}, option?: Mail.PerformMailActionWithMessagesOptionalParameter): void;

     /**
      * Creates a redirected message.
      * @param directParameter the message to redirect
      * @param option
      * @return the redirected message
      */
     redirect(directParameter: Mail.Message, option?: Mail.RedirectOptionalParameter): Mail.OutgoingMessage;

     /**
      * Creates a reply message.
      * @param directParameter the message to reply to
      * @param option
      * @return the reply message
      */
     reply(directParameter: Mail.Message, option?: Mail.ReplyOptionalParameter): Mail.OutgoingMessage;

     /**
      * Sends a message.
      * @param directParameter the message to send
      * @return true if sending was successful, false if not
      */
     send(directParameter: Mail.OutgoingMessage, ): boolean;

     /**
      * Command to trigger synchronizing of an IMAP account with the server.

      * @param option
      * 
      */
     synchronize(option?: Mail.SynchronizeOptionalParameter): void;
}