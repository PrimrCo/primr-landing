/**
 * Type definitions for Primr Events landing page
 */

/**
 * Interface for waitlist form data
 */
export interface WaitlistFormData {
  name: string;
  email: string;
}

/**
 * Interface for feature items displayed on the landing page
 */
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

/**
 * Interface for pain points section data
 */
export interface PainPoint {
  id: string;
  title: string;
  description: string;
  icon: string;
}

/**
 * Interface for navigation menu items
 */
export interface NavItem {
  label: string;
  href: string;
}

/**
 * Interface for footer links
 */
export interface FooterLink {
  label: string;
  href: string;
}
