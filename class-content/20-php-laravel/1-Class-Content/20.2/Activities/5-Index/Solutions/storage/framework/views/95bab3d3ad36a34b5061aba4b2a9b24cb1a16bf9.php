<?php $__env->startSection('title'); ?>
All User
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
<?php if ( ! (is_empty($users))): ?>
  <ul class="list-group">
    <?php foreach($users as user): ?>
      <li class="list-group-item"><?php echo e($user->name); ?></li>
    <?php endforeach; ?>
  </ul>
<?php endif; ?>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layout', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>