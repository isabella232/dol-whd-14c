﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DOL.WHD.Section14c.Api.App_GlobalResources {
    using System;
    
    
    /// <summary>
    ///   A strongly-typed resource class, for looking up localized strings, etc.
    /// </summary>
    // This class was auto-generated by the StronglyTypedResourceBuilder
    // class via a tool like ResGen or Visual Studio.
    // To add or remove a member, edit your .ResX file then rerun ResGen
    // with the /str option, or rebuild your VS project.
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Resources.Tools.StronglyTypedResourceBuilder", "15.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    [global::System.Runtime.CompilerServices.CompilerGeneratedAttribute()]
    internal class LocalizedText {
        
        private static global::System.Resources.ResourceManager resourceMan;
        
        private static global::System.Globalization.CultureInfo resourceCulture;
        
        [global::System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1811:AvoidUncalledPrivateCode")]
        internal LocalizedText() {
        }
        
        /// <summary>
        ///   Returns the cached ResourceManager instance used by this class.
        /// </summary>
        [global::System.ComponentModel.EditorBrowsableAttribute(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        internal static global::System.Resources.ResourceManager ResourceManager {
            get {
                if (object.ReferenceEquals(resourceMan, null)) {
                    global::System.Resources.ResourceManager temp = new global::System.Resources.ResourceManager("DOL.WHD.Section14c.Api.App_GlobalResources.LocalizedText", typeof(LocalizedText).Assembly);
                    resourceMan = temp;
                }
                return resourceMan;
            }
        }
        
        /// <summary>
        ///   Overrides the current thread's CurrentUICulture property for all
        ///   resource lookups using this strongly typed resource class.
        /// </summary>
        [global::System.ComponentModel.EditorBrowsableAttribute(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        internal static global::System.Globalization.CultureInfo Culture {
            get {
                return resourceCulture;
            }
            set {
                resourceCulture = value;
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to The user name or password is incorrect..
        /// </summary>
        internal static string InvalidUserNameorPassword {
            get {
                return ResourceManager.GetString("InvalidUserNameorPassword", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Login failure.
        /// </summary>
        internal static string LoginFailureMessage {
            get {
                return ResourceManager.GetString("LoginFailureMessage", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Your account has been locked out for {0} minutes due to multiple failed login attempts..
        /// </summary>
        internal static string LoginFailureMessageAccountLockedOut {
            get {
                return ResourceManager.GetString("LoginFailureMessageAccountLockedOut", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Email not confirmed.
        /// </summary>
        internal static string LoginFailureMessageEmailNotConfirmed {
            get {
                return ResourceManager.GetString("LoginFailureMessageEmailNotConfirmed", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Password expired.
        /// </summary>
        internal static string LoginFailureMessagePasswordExpired {
            get {
                return ResourceManager.GetString("LoginFailureMessagePasswordExpired", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Login success.
        /// </summary>
        internal static string LoginSuccessMessage {
            get {
                return ResourceManager.GetString("LoginSuccessMessage", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Password does not meet complexity requirements..
        /// </summary>
        internal static string PasswordComplexityCheckFailedMessage {
            get {
                return ResourceManager.GetString("PasswordComplexityCheckFailedMessage", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to Password meet complexity requirements..
        /// </summary>
        internal static string PasswordComplexityCheckSuccessMessage {
            get {
                return ResourceManager.GetString("PasswordComplexityCheckSuccessMessage", resourceCulture);
            }
        }
    }
}
