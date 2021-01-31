import type {
  Calendar,
  Contacts,
  DatabaseEvents,
  DVDPlayer,
  Finder,
  FontBook,
  ImageEvents,
  iTunes,
  Keynote,
  Mail,
  Messages,
  Notes,
  Numbers,
  Pages,
  Photos,
  QuickTimePlayer,
  Reminders,
  Safari,
  ScriptEditor,
  SpeechRecognitionServer,
  StandardAdditions,
  SystemEvents,
  Terminal,
  TextEdit,
  VoiceOver,
} from "./apps.d.ts";

type App =
  & typeof Application
  & Application._StandardAdditions
  & Application.AnyValue;

/**
 * bundle ID or name or path or remote machine
 */
export declare function Application(
  name: string,
): App;
/**
 * Pass custom Application type as generics
 * Return Application's StandardAdditions & T type
 */
export declare function Application<T>(
  name: string,
): App & T;
export declare function Application(
  name: "Calendar",
): App & Application._Calendar;
export declare function Application(
  name: "Contacts",
): App & Application._Contacts;
export declare function Application(
  name: "Database Events",
): App & Application._DatabaseEvents;
export declare function Application(
  name: "DVD Player",
): App & Application._DVDPlayer;
export declare function Application(
  name: "Finder",
): App & Application._Finder;
export declare function Application(
  name: "Font Book",
): App & Application._FontBook;
export declare function Application(
  name: "Image Events",
): App & Application._ImageEvents;
export declare function Application(
  name: "iTunes",
): App & Application._iTunes;
export declare function Application(
  name: "Keynote",
): App & Application._Keynote;
export declare function Application(
  name: "Mail",
): App & Application._Mail;
export declare function Application(
  name: "Messages",
): App & Application._Messages;
export declare function Application(
  name: "Notes",
): App & Application._Notes;
export declare function Application(
  name: "Numbers",
): App & Application._Numbers;
export declare function Application(
  name: "Pages",
): App & Application._Pages;
export declare function Application(
  name: "Photos",
): App & Application._Photos;
export declare function Application(
  name: "QuickTime Player",
): App & Application._QuickTimePlayer;
export declare function Application(
  name: "Reminders",
): App & Application._Reminders;
export declare function Application(
  name: "Safari",
): App & Application._Safari;
export declare function Application(
  name: "Script Editor",
): App & Application._ScriptEditor;
export declare function Application(
  name: "SpeechRecognitionServer",
): App & Application._SpeechRecognitionServer;
export declare function Application(
  name: "System Events",
): App & Application._SystemEvents;
export declare function Application(
  name: "Terminal",
): App & Application._Terminal;
export declare function Application(
  name: "TextEdit",
): App & Application._TextEdit;
export declare function Application(
  name: "VoiceOver",
): App & Application._VoiceOver;
/**
 * process ID
 */
export declare function Application(
  id: number,
): App;
export declare function Application<T>(
  id: number,
): App & T;

export declare namespace Application {
  // FIXME: very hack to avoid the Error
  // Error:(10, 5) TS4023: Exported variable 'TextEdit' has or is using name 'TextEdit' from external module "...TextEdit" but cannot be named.
  export interface _StandardAdditions extends StandardAdditions {
  }

  export interface _Calendar extends Calendar {
  }

  export interface _Contacts extends Contacts {
  }

  export interface _DatabaseEvents extends DatabaseEvents {
  }

  export interface _DVDPlayer extends DVDPlayer {
  }

  export interface _Finder extends Finder {
  }

  export interface _FontBook extends FontBook {
  }

  export interface _ImageEvents extends ImageEvents {
  }

  export interface _iTunes extends iTunes {
  }

  export interface _Keynote extends Keynote {
  }

  export interface _Mail extends Mail {
  }

  export interface _Messages extends Messages {
  }

  export interface _Notes extends Notes {
  }

  export interface _Numbers extends Numbers {
  }

  export interface _Pages extends Pages {
  }

  export interface _Photos extends Photos {
  }

  export interface _QuickTimePlayer extends QuickTimePlayer {
  }

  export interface _Reminders extends Reminders {
  }

  export interface _Safari extends Safari {
  }

  export interface _TextEdit extends TextEdit {
  }

  export interface _ScriptEditor extends ScriptEditor {
  }

  export interface _SpeechRecognitionServer extends SpeechRecognitionServer {
  }

  export interface _SystemEvents extends SystemEvents {
  }

  export interface _Terminal extends Terminal {
  }

  export interface _VoiceOver extends VoiceOver {
  }

  // Any Value
  export interface AnyValue {
    [index: string]: any;
    [index: number]: any;
  }

  /**
       * Return current app
       */
  export function currentApplication<T>(): App & T;

  /**
     * It should be true if you use StandardAdditions
     */
  export const includeStandardAdditions: boolean;
  // Add OS X 10.11
  // https://developer.apple.com/library/content/releasenotes/InterapplicationCommunication/RN-JavaScriptForAutomation/Articles/OSX10-11.html#//apple_ref/doc/uid/TP40014508-CH110-SW1
  export function id(): number;

  export function name(): string;

  /**
     * Return true if the app is running
     * @returns {boolean}
     */
  export function running(): boolean;

  /**
     * active the app
     */
  export function activate(): void;

  /**
     * quit the app
     */
  export function quit(): void;

  /**
     * launch the app
     */
  export function launch(): void;

  // https://qiita.com/zakuroishikuro/items/a7def965f49a2ab55be4
  /**
     * get command names
     */
  export function commandsOfClass(): string[];

  /**
     * get element names
     */
  export function elementsOfClass(className: string): string[];

  /**
     * get property names
     */
  export function propertiesOfClass(className: string): string[];

  /**
     * get parent object name
     * @param {string} className
     * @returns {string}
     */
  export function parentOfClass(className: string): string;

  export const windows: any;
  // https://developer.apple.com/library/content/releasenotes/InterapplicationCommunication/RN-JavaScriptForAutomation/Articles/OSX10-10.html#//apple_ref/doc/uid/TP40014508-CH109-SW1
  // TODO :should be define ApplicationWindow
  // export interface ApplicationWindows {
  //     [index: number]: any;
  //
  //     [index: string]: any;
  //
  //     at(index: number): any;
  //
  //     byName(name: string): any;
  //
  //     byId(id: number): any;
  // }
}
