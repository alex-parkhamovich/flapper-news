class Ability
  include CanCan::Ability

  def initialize(user)

    if user.role = 'admin'
      can :manage, :all 
    elsif user.user?
      can :manage, [Post, Comment]
    else
      can :read, :all? 
    end

  end
end
