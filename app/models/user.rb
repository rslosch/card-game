class User < ApplicationRecord
    has_secure_password

    validates :email, presence: true, uniqueness: true
    validates :password, presence: true, length: { minimum: 8 }
    validates_format_of :email, with: URI::MailTo::EMAIL_REGEXP, message: "has invalid format"

end
