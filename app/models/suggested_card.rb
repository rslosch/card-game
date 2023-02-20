class SuggestedCard < ApplicationRecord
    validates :content, presence: true, length: { maximum: 255 }
    validate :content_must_not_contain_links_or_scripts
  
    private
  
    def content_must_not_contain_links_or_scripts
      if content.present? && (content.match?(/<a\s/i) || content.match?(/<script/i))
        errors.add(:content, "you think you're funny?")
      end
    end

end
