import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import PrivacyPolicyPagePreview from './preview-templates/PrivacyPolicyPagePreview'
import TermsOfUsePagePreview from './preview-templates/TermsOfUsePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('privacy-policy', PrivacyPolicyPagePreview)
CMS.registerPreviewTemplate('terms-of-use', TermsOfUsePagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
