# frozen_string_literal: true

class Ability
  include CanCan::Ability

  def initialize(user) 
    user ||= User.new # guest user (not logged in)

    can :generate, :temporary_links

    # can :read, Author
    can :manage, Author, user_id: user.id

    return unless user.try(:admin?)
    can :manage, :all
  end
end
