source "https://rubygems.org"

gem "jekyll", "~> 4.3"

group :jekyll_plugins do
  gem "jekyll-seo-tag", "~> 2.8"
  gem "jekyll-sitemap", "~> 1.4"
end

# Link checking, run in CI on every push and pull request
group :test do
  gem "html-proofer", "~> 5.0"
end

# Windows/JRuby compatibility shims, harmless elsewhere
platforms :windows, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Required on Ruby 3.4+, which dropped these from the stdlib
gem "csv"
gem "base64"
gem "bigdecimal"
gem "logger"
gem "webrick", "~> 1.8"
